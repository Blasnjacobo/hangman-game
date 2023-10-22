import React from 'react'

export default function WrongLetters ({wrongLetters}) {
  return (
    <div className='wrong-letters-container'>
        <div>
            {wrongLetters.length > 0 && <p>Wrong letters so far:</p>}
            {wrongLetters
            .map((letter, i) => <span key={i}>{letter}</span>)
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ",", curr], null)}
        </div>
    </div>
  )
}
