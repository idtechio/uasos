import type { ChoiceButtonProps } from './type'
import { Button, Text, Icon } from './style'
import { lenguageTextSwitcher } from '../../../helpers' 

const ChoiceButton = ({text, icon}: ChoiceButtonProps) => {
    return (
        <Button>
            {icon ? <Icon>{icon}</Icon> : null}
            {text ? <Text>{lenguageTextSwitcher(text)}</Text> : null}
        </Button>
    )
}

export default ChoiceButton