export default {
    name : '',
    imgURL : 'https://aniyuki.com/wp-content/uploads/2022/05/aniyuki-anya-forger-image-44.jpg',
    sex : 'F',
    age : 6,
    race : 'Humano-Monstro',
    level : 15,
    hp: 100,
    history : 'Uma criança que pode ler mentes e facilmente manipular os outros, além de ter dois escravos, Loid Forger e Yor Forger',
    attributes: {    
        for: 0,
        dex: 2,
        con: 1,
        int: 2,
        sab: 5,
        car: 5
    },
    weapons : [{
        name: 'Sr. Dino',
        hp: 10,
        ac: 1,
        ca: 0,
        dmg: '2d10', //Do a function for roll dices and calculate it
        effect: '',
        description: 'Um dinourso muito amado'
    },
    {
        name: 'Sr. Ursal',
        hp: 20,
        ac: 0,
        ca: 1,
        dmg: '3d6', //Do a function for roll dices and calculate it
        effect: 'Ataques forçam o inimigo atingido a passar num teste de CON, se não passar o inimigo toma desvantagem',
        description: 'A ursal'
    }],
    armors : [{
        name: 'Vestido fofo',
        hp: 14,
        ac: 3,
        ca: 0,
        effect: 'Ataques de carisma direcionados ao usuário deste vestido, afetam apenas a pessoa que atacou',
        description: 'Um vestido lindo'
    },
    {
        name: 'Uniforme escolar',
        hp: 0,
        ac: 10,
        ca: 0,
        effect: 'Ao receber ataque, alerta ao atacante que crianças são seres indestrutíveis',
        description: 'Um clássico'
    }],
    extraItems : [{
        name: 'Chifres fofos',
        hp: 0,
        ac: 2,
        ca: 1,
        effect: '',
        description: ' '
    }],
    magics: [{
        type : 'O',
        description: 'Mantém  a marca de fofuridão em Loid Forger'
    },
    {
        type : 'O',
        description: 'Mantém  a marca de fofuridão em Yor Forger'
    },
    {
        type : 'O',
        description: 'Passivamente consegue ler mentes, mas não consegue focar em alvos específicos'
    }],
}