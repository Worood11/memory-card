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
  return (
    <div className="app">
      <GameHeader score={3} moves={10}/>

      <div className="cards-grid">
        {cards.map((card) =>(
          <Card card={card}/>
        )
        )}
      </div>
    </div>
  )
}

export default App
