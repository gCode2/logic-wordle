
export interface WordRowProps{
    wordLength: number,
    guess: string[]
}

export type GameStateType = {
  guesses: number;
  wordLength: number;
  guessHistory: {
    id: number;
    guess: string[];
  }[];
  currentGuess: string[];
  activeRow: number;
};

export interface LetterBoxProps{
    letter: string
}