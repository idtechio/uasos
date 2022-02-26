import type { FiltersProps } from './types'
import { FiltersWraper, Filter} from './style'
import { ButtonDefault } from '../Buttons'

const Filters = ({filters}: FiltersProps) => {
	return(
        <FiltersWraper>
            {filters.map(filter => {
                return(
                    <Filter><ButtonDefault anchor={filter.name}/></Filter>
                )
            })}
        </FiltersWraper>
	)
}

export default Filters