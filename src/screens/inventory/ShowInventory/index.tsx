import characterExample from './../../../utils/characterData'

import { Header } from '../../../components/Header'
import { InventoryItem } from '../../../components/InventoryItem'


import {
    Container,
    ScrollContainer,
    EndContainer
} from './styles'



export function ShowInventory(){
    return(
        <Container>
            <Header title={'Meu inventário'} backArrow/>

            <ScrollContainer>
                {characterExample.weapons.map((weapon, i) => {
                    return(               
                    <InventoryItem 
                        key={`${weapon.name}-${i}`}
                        damageDice={weapon.dmg}
                        itemAC={weapon.ac}
                        itemCA={weapon.ca}
                        itemDescription={weapon.description}
                        itemHP={weapon.hp}
                        itemEffect={weapon.effect}
                        itemName={weapon.name}
                        itemType={'Weapon'}    
                    />
                    )}
                )}

                <EndContainer/>
            </ScrollContainer>
        </Container>
    )
}