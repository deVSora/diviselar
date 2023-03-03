import { GetCharacter } from '../../storage/character/getCharacter'
import {
    Container,
} from './styles'

export function Home() {
    async function fetchChar(){
        const data = await GetCharacter()
        console.log(data)
    }
    fetchChar()

    return(
        <Container>
        </Container>
    )
}