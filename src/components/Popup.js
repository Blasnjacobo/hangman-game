import React, {useEffect} from 'react'
import { checkWin } from '../helpers/Helpers';

export default function Popup ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) {
    let finalMessage = "";
    let finalMessageRevealWord= "";
    let playable= true;

    if (checkWin (correctLetters,  wrongLetters, selectedWord) === "win"){
    finalMessage = "Well done dude, you have sucessfully done it, congratulations!!! 💃🏽"
    playable= false;
  } else if (checkWin (correctLetters,  wrongLetters, selectedWord) === "lose"){
    finalMessage = "Limits of attempts reached, you lose, you can try again"
    finalMessageRevealWord= `The word was: ${selectedWord}`
    playable= false
  }

  useEffect(() => setPlayable(playable))

    return (
    <div className='popup-container' style={finalMessage !== "" ? {display: "flex"} : {}}>
        <div className='popup'>
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
            <button onClick={playAgain}>Play Again</button>
        </div>
    </div>
  )
}