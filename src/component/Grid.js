import React, { Fragment } from 'react'
import Row from './Row'

function Grid({currentGuess, guesses, turn}) {
  return (
    <Fragment>
        {guesses.map((guess, i)=>{
          if(turn === i) {
              return <Row key={i} currentGuess={currentGuess} />
          }
            return <Row key={i} guess={guess} /> 
        })}
    </Fragment>
  )
}

export default Grid