import { useEffect, useState } from 'react'



function App() {
  const [counter, setCounter] = useState(0);
  const [running. setRunning] = useState(false)

  const resetCounter = () => {
    setCounter(0);
  }

  useEffect(()=>{
    const counterIncr = setInterval(()=> {
      setCounter((prevCounter)=>{
        console.log("useEffect starting")
        return prevCounter + 1
      })
    },3000);

    return () =>  clearInterval(counterIncr);
  }, [])

  return (
    <div className='container'>
      <div className="counter">{counter}</div>
      <div className="btn-container">
        <button 
        className='btn'
        onClick={resetCounter}>reset</button>

        <button 
        className='btn'
        onClick={resetCounter}>reset</button>

        <button 
        className='btn'
        onClick={resetCounter}>reset</button>
      </div>
    </div>
    
  )
}

export default App
