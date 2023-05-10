import React, {useEffect, useState} from 'react'

function Keypad({usedKeys}) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
   fetch("http://localhost:3001/letters")
    .then(res => res.json())
    .then(json=>{
        setLetters(json)
    })
  }, [])


  return (
    <div className='keypad'>
        {letters && letters.map((letter)=>{
            const color = usedKeys[letter.key]
           return(
            <div className={color} key={letter.key}>{letter.key}</div>
           )  
        })}
    </div>
  )
}

export default Keypad