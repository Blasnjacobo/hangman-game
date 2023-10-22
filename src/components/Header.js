import React from 'react'
import img from "./good-luck.jpg"

export default function Header () {
  return (
    <>
        <h1>Hangman Game</h1>
        <p>The objective is to find the hidden word, 6 wrong answers and you are out.</p>
        <p>Please, enter a letter</p> 
        <img src={img} alt='Good-luck message' className="good-luck"></img>
    </>
  )
}

