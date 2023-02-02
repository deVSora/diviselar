export default { 
    name : 'Iruma Suzuki', 
    imgURL : 'https://i0.wp.com/dicasgeeks.com.br/wp-content/uploads/2021/05/iruma-dicas-geeks.png?resize=1000%2C562', 
    sex : 'M', 
    age : 15, 
    race : 'Humano', 
    level : 18, 
    hp: 125, 
    history : 'Um Grande Sobrevivente, que foi vendido aos demonoides, mas agora passa a vida sendo cuidado por 1, e este alguem é um grande demonio, chamado Sulyvan', 
    attributes: {     
        for: 2, 
        dex: 5, 
        con: 3, 
        int: 1, 
        sab: 5, 
        car: 2 
    }, 
    weapons : [{ 
        name: 'Arco da Vontade Humana', 
        hp: 20, 
        ac: 0, 
        ca: 0, 
        dmg: 20, //Do a function for roll dices and calculate it 
        effect: 'Causa dano magico no alvo invés de fisico', 
        description: 'Um Arco recurvo que vem de uma pena de um monstro antigo e poderoso' 
    }, 
    { 
        name: 'Anel do grande Faminto', 
        hp: 30, 
        ac: 0, 
        ca: 1, 
        dmg: 0, //Do a function for roll dices and calculate it 
        effect: 'Ataques magicos do usuario são buffados, para causarem o dobro de dano caso tenha consumido poder demoniaco, acumula em até 5 cargas', 
        description: 'Um anel dado de seu mentor e novo Vovô, sulyvan, um grande Arqui Demonio' 
    }], 
    armors : [{ 
        name: 'Roupas de colegio', 
        hp: 15, 
        ac: 4, 
        ca: 0, 
        effect: 'O usuario pode passar despercebido entre os demonoides, que confundirão com um deles', 
        description: 'Uma vestimenta para demonoides aprendiz' 
    }, 
    { 
        name: 'Roupa de Combate', 
        hp: 0, 
        ac: 15, 
        ca: 0, 
        effect: 'Ao receber ataque, o usuario leva menos dano de golpes demonoides', 
        description: 'Para treinamento com maxima de efetividade' 
    }], 
    extraItems : [{ 
        name: 'Semente da Rebeldia', 
        hp: 0, 
        ac: 0, 
        ca: 0, 
        effect: 'Induz o usuario a uma fase rebelde de um demonoide', 
        description: 'A rebeldia de um demonio as vezes pode ser assustadora, tome cuidado!' 
    }], 
    magics: [{ 
        type : 'O', 
        description: 'Cria uma parede magica invisivel' 
    }, 
    { 
        type : 'O', 
        description: 'Lance uma bola de fogo' 
    }, 
    { 
        type : 'O', 
        description: 'Sentidos magicos que ajudam o usuario a desviar de ataques magicos, mas o usuario sempre está em prontidão mesmo dormindo' 
    }], 
}