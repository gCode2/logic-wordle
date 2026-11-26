import { useState } from 'react'
import './App.css'
import WordRow from './components/WordRow';

const INIT_SETTINGS = {
  guesses: 8,
  wordLength: 5,
  guessHistory: []
}

function App() {
  const [gameState, setGameState] = useState(INIT_SETTINGS);

  return (
    <>
      <main className="flex flex-col justify-center items-center text-center gap-3 h-screen">
        <section className="flex flex-col gap-2">
          <span className="text-3xl font-bold">
            Logic Wordle
          </span>
          <span className="text-lg">
            A logic-based, Wordle-inspired word puzzle. Try it out.
          </span>
        </section>
        <section className="flex flex-col gap-1">
          {Array.from(Array(gameState.guesses)).map((wordRow, index)=>(
            <WordRow key={index} wordLength={gameState.wordLength}/>
          ))}
        </section>
      </main>
    </>
  )
}

export default App
