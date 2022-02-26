import { Button, ButtonAnchor } from './style'
import type { ButtonProps } from '../types'

const ButtonCta = ({anchor}: ButtonProps) => {
	return(
		<Button>
			<ButtonAnchor>{anchor}</ButtonAnchor>
		</Button>
	)
}

export default ButtonCta
