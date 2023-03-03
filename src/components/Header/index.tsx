import {
    Container,
    BackIcon,
    EditIcon,
    Title,
    BackButton,
    EditButton,
    InvisibleContainer
} from './styles'

import { useNavigation } from '@react-navigation/native'

interface Props{
    backArrow ?: boolean
    title : String
    edit ?: boolean
    editScreen ?: () => void 
}

export function Header({backArrow = false, title, edit = false, editScreen}: Props){
    const navigation = useNavigation()
    
    function handleBack(){
        navigation.navigate('start')
        navigation.navigate('home')
    }

    return(
        <Container>
            {backArrow ? <BackButton onPress={handleBack}><BackIcon/></BackButton> : <InvisibleContainer/>}
            <Title>{title}</Title>
            {edit ? <EditButton onPress={editScreen}><EditIcon/></EditButton> : <InvisibleContainer/>}
        </Container>
    )
}