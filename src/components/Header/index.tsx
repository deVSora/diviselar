import {
    Container,
    BackIcon,
    EditIcon,
    Title,
    BackButton,
    EditButton
} from './styles'

import theme from '../../theme'

interface Props{
    backArrow ?: boolean
    title : String
    edit ?: boolean
    editScreen ?: () => {} 
}

export function Header({backArrow = false, title, edit = false, editScreen}: Props){
    return(
        <Container>
            {backArrow && <BackButton onPress={()=>{}}><BackIcon/></BackButton>}
            <Title>{title}</Title>
            {edit && <EditButton onPress={editScreen}><EditIcon/></EditButton>}
        </Container>
    )
}