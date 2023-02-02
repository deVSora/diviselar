import {
    Container,
    Spinner
} from './styles'

import theme from '../../theme'

export function Loading(){
    return(
        <Container>
            <Spinner color={theme.colors.secondary}/>
        </Container>
    )
}