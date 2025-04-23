import { useState } from 'react'


function App() {
  const [good,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const puntajeBueno = 1
  const puntajeNeutral =0 
  const puntajeMalo = -1
  const all = good+neutral+bad
  const positive = (good/all) * 100
  const promedio = () => {
    return ((good * puntajeBueno) +
           (neutral + puntajeNeutral) +
           (bad * puntajeMalo) / all) 
  }
  return (
    <>
      <h1>give feedback</h1>
      <div>
        <button onClick={()=>{setGood(good+1)}}>good</button>
        <button onClick={() => {setNeutral(neutral+1)}}>neutral</button>
        <button onClick={() => {setBad(bad+1)}}>bad</button>
      </div>
      <h1>statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {all}</p>
      <p>average:{isNaN(promedio())? 0: promedio() }</p>
      <p>positive: {positive} %</p>
    </>
  )
}

export default App
