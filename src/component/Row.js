import React, { Fragment } from 'react'

function Row({guess, currentGuess}) {

  if(guess){
    return (
      <div className='row past'>
        {guess.map((letter, index)=>{
          return (
            <div key={index} className={letter.color}>{letter.key}</div>
          )
        })}
      </div>
    )
  }

  if(currentGuess) {
    let letters = currentGuess.split('')
    return (
      <div className='row current'>
        {letters.map((letter, i)=>{
          return (
            <div key={i} className="filled">{letter}</div>
          )
        })}
        {[...Array(5 - letters.length)].map((_,i)=>(
          <div key={i} ></div>
        ))}
      </div>
    )
  }
  return (
    <div className='row'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Row