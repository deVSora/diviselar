import {
    Container,
    TypeText,
    Line,
    NameText,
    MediumText,
    SemiBoldText,
    LineContainer,
    itemType
} from './styles'

interface Props{
    itemType : itemType
    itemName : string
    itemHP : number
    itemAC : number
    itemCA : number
    itemEffect : string
    itemDescription : string
    damageDice : string
}

export function InventoryItem({itemType, itemName, itemHP, itemAC, itemCA, itemEffect, damageDice, itemDescription} : Props){
    if(itemEffect === ''){
        itemEffect = 'Não tem efeito'
    }
    if(itemDescription === ''){
        itemDescription = 'Não tem descrição'
    }
    
    return(
        <Container type={itemType}>
            <TypeText>{itemType}</TypeText>
            <NameText>{itemName}</NameText>
            <Line/>
            <LineContainer>
                <SemiBoldText>{`HP: ${itemHP}`}</SemiBoldText>
                <SemiBoldText>{`AC: ${itemAC}`}</SemiBoldText>
                <SemiBoldText>{`CA: ${itemCA}`}</SemiBoldText>
            </LineContainer>
            {itemType === 'Weapon' ? <SemiBoldText>{`Dano: ${damageDice}`}</SemiBoldText> : <></>}
            <Line/>
            <SemiBoldText>Efeito</SemiBoldText>
            <MediumText>{itemEffect}</MediumText>
            <Line/>
            <SemiBoldText>Descrição</SemiBoldText>
            <MediumText>{itemDescription}</MediumText>
        </Container>
    )
}