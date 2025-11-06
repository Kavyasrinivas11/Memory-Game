import React, { useEffect, useState } from 'react'
import Data from '../components/data'
import Card from '../components/Card'
import { Box, Button, Typography } from '@mui/material'
import flipSoundFile from '../assets/flip.mp3';
import matchSoundFile from '../assets/match.mp3';
import winSoundFile from '../assets/win.mp3';


function GameBoard() {

  const [cardsArray,setCardsArray]=useState([])
  const [firstCard,setFirstCard]=useState(null)
  const [secondCard,setSecondCard]=useState(null)
  const [moves,setMoves]=useState(0)
  const [stopFlip,setStopFlip]=useState(false)
  const[won,setWon]=useState(0)
  const [bestScore, setBestScore] = useState(null)

  function NewGame(){
    setTimeout(()=>{const randomOrderArray = [...Data].sort(() => 0.5 - Math.random())
  setCardsArray(randomOrderArray)
  setFirstCard(null)
  setSecondCard(null)
  setMoves(0)
  setWon(0)
},1200)
  }



 function handleSelectedCards(item) {
  if (!firstCard) {
    setFirstCard(item)
    playFlipSound()
  } else if (firstCard.id !== item.id) {
    setSecondCard(item)
    playFlipSound()
  }
}
  useEffect(()=>{
    if(firstCard && secondCard){
      setStopFlip(true)
      if(firstCard.name===secondCard.name){
        playMatchSound()
        setCardsArray((prevArray)=>{
         return prevArray.map((unit)=>{if(unit.name===firstCard.name){
          return {...unit,matched:true}
         }
         else{
          return unit
         }
        })
        })
        setWon((preVal)=>preVal+1)
        removeSelection()
      }
      else{
        setTimeout(()=>{removeSelection()},1000)
      }
    }
  },[firstCard,secondCard])


  function removeSelection(){
    setFirstCard(null)
    setSecondCard(null)
    setStopFlip(false)
    setMoves((prevVal)=>prevVal+1)
    }
    useEffect(() => {
    NewGame()
    const storedBest = localStorage.getItem("bestScore")
    if (storedBest) setBestScore(Number(storedBest))
  }, [])

const playFlipSound = () => {
  const audio = new Audio(flipSoundFile);
  audio.volume = 0.5; // optional: adjust loudness
  audio.play();
};

const playMatchSound = () => {
  const matchSound = new Audio(matchSoundFile);
  matchSound.volume = 0.6;
  matchSound.play();
};


const playWinSound = () => {
  const winSound = new Audio(winSoundFile);
  winSound.volume = 0.6;
  winSound.play();
};
useEffect(() => {
  if (won === Data.length / 2 && moves > 0) {
  playWinSound();

  // 🏆 Check and update best score
  if (bestScore === null || moves < bestScore) {
    setBestScore(moves);
    localStorage.setItem("bestScore", moves);
  }
}
})

  return (
    <div style={{marginTop:'80px',textAlign:'center'}}>
<Typography variant="h3" sx={{  color: '#fff',  textShadow: '0 0 10px #00eaff, 0 0 20px #00eaff, 0 0 40px #00eaff',
    fontWeight: 'bold',textAlign: 'center',letterSpacing: '3px',textTransform: 'uppercase',mb: 5}}> Memory Game</Typography>

<Typography variant="h6" sx={{ color: '#b3ffff', textAlign: 'center', maxWidth: 600, mx: 'auto', lineHeight: 1.6,
 textShadow: '0 0 10px rgba(0, 234, 255, 0.6)' }}>
  Flip the cards to find matching pairs! <br />
  The fewer moves you make — the sharper your mind shines! <br />
  Are you ready to test your brainpower?
</Typography>

      <Box className='card-grid'>
  {cardsArray && cardsArray.length > 0 ? (
    cardsArray.map((item) => (
      <Card item={item} key={item.id} handleSelectedCards={handleSelectedCards} toggled={item === firstCard ||item === secondCard ||
          item.matched === true} stopFlip={stopFlip}/>
    ))
  ) : (
    <Typography sx={{ color: 'white', mt: 3 }}>Loading...</Typography>
  )}
</Box>

<Box sx={{ marginTop: '40px', color: 'white', fontSize: '22px' }}>
        {won !== Data.length / 2 ? (
          <>
            Moves: {moves} <br />
            {bestScore !== null && <>Best Score: 🏆 {bestScore} moves</>}
          </>
        ) : (
          <>
            🎉 You Won in {moves} moves !! <br />
            {bestScore !== null && <>Best Score: 🏆 {bestScore} moves</>}
          </>
        )}
      </Box>

      <Button
        variant="contained"
        onClick={NewGame}
        sx={{ fontSize: '17px', marginTop: '40px',marginBottom:'30px' }}
      >
        New Game
      </Button>

    </div>
  )
}

export default GameBoard