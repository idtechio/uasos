import { SignInMethod } from 'firebase/auth'
import { useContext } from 'react'
import { useMutation, useQuery } from 'react-query'
import { AuthContext } from '../../pages/_app'
import { AccountApi } from '../client-api/account'
import { API_REFRESH_LATENCY } from '../helpers/misc'
import { Authorization } from '../hooks/useAuth'
import { QueryKeys } from './queryKeys'

export const useEditAccount = () => {
  const { refetchAccount } = useContext(AuthContext)
  return useMutation(AccountApi.updateAccount, {
    onSuccess: () => {
      setTimeout(() => {
        refetchAccount && refetchAccount()
      }, API_REFRESH_LATENCY)
    },
  })
}

const useGetSignInMethods = () =>
  useQuery([QueryKeys.SIGN_IN_METHODS], Authorization.getSignInMethods, {
    refetchOnMount: true,
  })

type Keys = 'GOOGLE' | 'FACEBOOK'
type SignInValueType = typeof SignInMethod[Keys]

export const useCanEditEmail = () => {
  const { data } = useGetSignInMethods()
  const can = !data?.some((value) =>
    [SignInMethod.FACEBOOK, SignInMethod.GOOGLE].includes(
      value as SignInValueType
    )
  )

  return can
}
