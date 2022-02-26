import type { CompositionGridProps } from './types'
import { Grid } from './style'

const CompositionGrid = ({children, spaceing= [0,0], mobileReverse = false, itemsPerRow, alignItems = 'unset', disableRwd}: CompositionGridProps) => {
	return(
		<Grid spaceing={spaceing} disableRwd={disableRwd} childrenCount={itemsPerRow ? itemsPerRow : Array.isArray(children) ? children.length : 1} mobileReverse={mobileReverse} alignItems={alignItems}>
			{children}
		</Grid>
	)
}

export default CompositionGrid