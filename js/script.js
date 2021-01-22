$(document).ready(function(){


const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}


const cards = [{

  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lorem ipsum',
  story: 'Naltro Lorem Ipsum',

  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

  },
  {

    cardName: 'Sviluppatore guerriero',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[0],
        fieldCodes[3],

      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,  // r
      toughness: 3
    }

    },
    //inizio--------------
    {

      cardName: 'Sviluppatore pazzo',
  
      cost: {
        genericCostNumber: 3,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[2],
          fieldCodes[0]
        ],
      },
  
      picture: 'images/g.png',  // da inserire immagine
      cardType: cardTypes[1],
      cardObject: 'Bear',
  
      editionType: editions['BL'],
  
      description: 'Lo sviluppatore guerriero spezza i byte in bit!',
      story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',
  
      score: {
        power: 5,  // r
        toughness: 3
      }
  
      },
    //inizio--------------
      
      {

        cardName: 'Sviluppatore scappato',
    
        cost: {
          genericCostNumber: 3,
          costFields: [ // colors array con riferimento a fieldCodes
            fieldCodes[2],
            fieldCodes[3],
            fieldCodes[3],

          ],
        },
    
        picture: 'images/g.png',  // da inserire immagine
        cardType: cardTypes[1],
        cardObject: 'Bear',
    
        editionType: editions['BL'],
    
        description: 'Lo sviluppatore guerriero spezza i byte in bit!',
        story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',
    
        score: {
          power: 3,  // r
          toughness: 3
        }
    
        },
    //inizio--------------
        
        {

          cardName: 'Sviluppatore morto',
      
          cost: {
            genericCostNumber: 3,
            costFields: [ // colors array con riferimento a fieldCodes
              fieldCodes[2],
              fieldCodes[3],
              fieldCodes[4],

            ],
          },
      
          picture: 'images/g.png',  // da inserire immagine
          cardType: cardTypes[1],
          cardObject: 'Bear',
      
          editionType: editions['BL'],
      
          description: 'Lo sviluppatore guerriero spezza i byte in bit!',
          story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',
      
          score: {
            power: 3,  // r
            toughness: 3
          }
      
          },
    
    
]

console.log(cards);

//funzione di filtro che serve per filtrare le carte in base alvalore che è presente in "power"

function filterCardsPower(ValPower,CardsArrayList){
  return CardsArrayList.filter((element)=>{
    return element.score.power===ValPower
  })
}
console.log(filterCardsPower(3,cards))

//creamo una funzione che struttura la "ul" in html 

function structuryHmlUl(ValPowerIdHtml,CardsArrayList){
  const list=document.getElementById(ValPowerIdHtml);

  CardsArrayList.forEach((element)=>{
    list.innerHTML+=` <li> ${ element.cardName} </li>`
  })
 
};

structuryHmlUl('cadrsListMagic',cards)



})//fine jqeri
