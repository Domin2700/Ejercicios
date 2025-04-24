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

  const statistics = {
    'good': good,
    'neutral': neutral,
    'bad': bad,
    'all': all,
    'average': isNaN(promedio())? 0: promedio(),
    'positive': isNaN(positive)? 0 : positive
  }

  
  return (
    <>
      <h1>give feedback</h1>
      <div>
        <Button text ='good' onClick={()=>{setGood(good+1)}}/>
        <Button text = 'neutral' onClick={() => {setNeutral(neutral+1)}}/>
        <Button text = 'bad' onClick={() => {setBad(bad+1)}}/>
      </div>
      <h1>statistics</h1>
      
        {statistics.all >= 1? <Statistics datos = {statistics} />: <p>No feedback given</p>}
      
      
      
      
    </>
  )
}

const Statistics = (props) => {
  console.log(props)
  return(
    <>
   <table>
         <StatisticLine text ="good" value ={props.datos.good} />     
         <StatisticLine text ="neutral" value ={props.datos.neutral} />     
         <StatisticLine text ="bad" value ={props.datos.bad} />     
         <StatisticLine text ="all" value ={props.datos.all} />     
         <StatisticLine text ="average" value ={props.datos.average} />     
         <StatisticLine text ="positive" value ={props.datos.positive} />     
     </table> 
    
    </>
  )
}

const StatisticLine = (props) => {

  return(
    <>
     
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
   
 
    </>
  )
}

const Button = (props) => {

  return (
    <>
    <button onClick={props.onClick}>
      {props.text}
    </button>
    </>
  )
}

export default App
