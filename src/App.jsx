import GameHeader from "./components/GameHeader"
import Card from "./components/Card";
import { useEffect, useState } from "react";

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

function App() {
  const [cards,setCards] = useState([])
  const [flippedCards, setFlippedCards]= useState([])
  const initGame = ()=> {
    const findalCards = cardValues.map((value, index) => (
   {
    id: index,
    value, 
    isFlipped: false,
    isMatched: false,
   }

    ))
    setCards(findalCards)
  }

  useEffect(()=>{
    initGame();

  }, [])

const handleCardClick = (card)=>{
  if(card.isFlipped || card.isMatched){
    return
  }
  const newCards = cards.map((c)=> {
    if(c.id === card.id){
      return{...c,isFlipped: true}
    } else {
      return c
    }
  })

  setCards(newCards)

  const newFlippedCards = [...flippedCards,card.id]
  setFlippedCards(newFlippedCards)

  if(flippedCards.length === 1){
    const firstCard = cards[flippedCards[0]]

    if(firstCard.value === card.value){
      alert("Match")
    }
  }
}

  return (
    <div className="app">
      <GameHeader score={3} moves={10}/>

      <div className="cards-grid">
        {cards.map((card) =>(
          <Card card={card} onClick={handleCardClick}/>
        )
        )}
      </div>
    </div>
  )
}

export default App
