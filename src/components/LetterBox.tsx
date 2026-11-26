import type { LetterBoxProps } from "../types/types";

function LetterBox({letter}:LetterBoxProps){
    return (
        <div className="bg-gray-800 w-8 h-8 rounded text-white flex flex-col justify-center items-center text-center">
            {letter}
        </div>
    )
}
export default LetterBox;