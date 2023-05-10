import React, {useState} from 'react'

function useWordle(solution) {

    //Formatting a work into an array of letter objects.
    //Add a new guess to the guess state
    //Update the isCorrect state
    //add one to th eturn state
    //




    const [turn, setTurn] =useState(0)
    const [currentGuess, setCurrentGuess] = useState("")
    const [guesses, setGuesses] = useState([...Array(6)]) //each guess is an array
    const [history, setHistory] = useState([])// each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})
    


    const formatGuess =()=> {
        let solutionArray = [...solution]

        let formattedGuess = [...currentGuess].map((letter)=>{
            return {key:letter, color: "gray"}
        })

        //find green letters
        formattedGuess.forEach((letter, i) => {
            if (solutionArray[i] === letter.key) {
                formattedGuess[i].color = "green"
                solutionArray[i] = null
            }
        })

        //find the yellow letter
        formattedGuess.forEach((letter, i) => {
            if (solutionArray.includes(letter.key) && letter.color !== "green") {
                formattedGuess[i].color = "yellow"
                solutionArray[solutionArray.indexOf[letter.key]] = null 
            }
        })

        return formattedGuess

    }

    const addNewGuess=(formattedGuess)=>{
        if(currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prev)=>{
            let newGuesses = [...prev]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })

        setHistory(prev =>{
            return [...prev, currentGuess]
        })
        setTurn(prev=> prev+1)
        setUsedKeys((prev)=>{
            let newKeys = {...prev}
            formattedGuess.forEach((letter)=>{
                const currentColor = newKeys[letter.key]

                if(letter.color === "green"){
                    newKeys[letter.key] = "green"
                    return 
                }
                if(letter.color === "yellow" && currentColor !== "green"){
                    newKeys[letter.key] = "yellow"
                    return 
                }
                if(letter.color === "gray" && currentColor !== "green" &&  currentColor !== "yellow"){
                    newKeys[letter.key] = "gray"
                    return 
                }
            })

            return newKeys
        })

        setCurrentGuess('')
    }

    //Handle keyup event & track current guess
    //if user presses enter, add the new gues
    const handleKeyUp = ({key})=>{
        if(key === "Enter") {
            // only add guess if turn is less than 5
            if (turn > 5) {
                console.log("not possible")
                return
            }

            // do not allow duplicate words
            if(history.includes(currentGuess)){
                console.log("This Word has already been Entered")
                return
            }
            // check word is 5 chars long
            if(currentGuess.length !== 5) {
                console.log('not long enough')
                return
            }
            const formatted = formatGuess()
            console.log(formatted)
            addNewGuess(formatted)
        }

        if(key==="Backspace"){
            setCurrentGuess(prev=>prev.slice(0,-1))
            return
        }

        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5) {
                setCurrentGuess(prev => prev+key)
            }
        }
    }
    return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp}
}

export default useWordle