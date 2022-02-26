// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { LenguageText } from '../../src/helpers/lenguageTextSwitcher'

export type Accommodation = {
  id: string
  host: {
    id: string
    name: string,
    email: string
  },
  location: {
    id: string
    city: string
    state: string
    preferences: [
      {
        id: string
        name: LenguageText
        icon: React.ReactNode
        value: boolean
      }
    ]
    resources: [
      {
        id: string
        name: LenguageText
        value: boolean | number
      }
    ]
    conditions: [
      {
        id: string
        name: LenguageText
        value: boolean | number
      }
    ]
  },
}
export type Accommodations = Array<Accommodation>

export default function getAccommodations(
  req: NextApiRequest,
  res: NextApiResponse<Accommodations>
) {

  const {query: {
		fileKey,
		token,
	}} = req

  // TODO: API Call
  const accommodations = []
    
  res.status(200).json(accommodations)
}