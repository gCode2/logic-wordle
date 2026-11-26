import type { WordRowProps } from "../types/types";
import LetterBox from "./LetterBox";
import WordSuggestionRow from "./WordSuggestionRow";

function WordRow({wordLength, guess}:WordRowProps){
    return (
        <div className="flex flex-row gap-1">
            {
                Array.from(Array(wordLength)).map((_, index)=>(
                    <LetterBox key={index} letter={guess[index] ?? ''}/>
                ))
            }
            <WordSuggestionRow/>
        </div>
    )
}
export default WordRow;