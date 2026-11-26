
export interface WordRowProps{
    wordLength: number
}

export interface GameStateType{
    guesses: number,
    wordLength: number,
    guessHistory: string[][]
    currentGuess: string[]
}