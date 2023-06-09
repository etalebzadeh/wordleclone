import React from 'react'

function Modal({isCorrect, turn, solution}) {
  return (
    <div className='modal'>
        {isCorrect &&(
            <div>
                <h1>You Win</h1>
                <p className='solution'>{solution}</p>
                <p>You found the solution in {turn} guesses :)</p>
            </div>
        )}
       
        {!isCorrect &&(
            <div>
                <h1>Guesses Over! Try Again</h1>
                <p className='solution'>{solution}</p>
                <p>Better Luck this time</p>
            </div>
        )}
    
    </div>
  )
}

export default Modal