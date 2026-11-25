import type { WordRowProps } from "../types/types";
import LetterBox from "./LetterBox";
import WordSuggestionRow from "./WordSuggestionRow";

function WordRow({wordLength}:WordRowProps){
    return (
        <div className="flex flex-row gap-1">
            {
                Array.from(Array(wordLength)).map((letter, index)=>(
                    <LetterBox/>
                ))
            }
            <WordSuggestionRow/>
        </div>
    )
}
export default WordRow;