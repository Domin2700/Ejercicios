
function App() {
const course = 'Half Stack application development'

const parts = [
{
  name: 'Fundamentals of React',
  exercises1:10
},
{
  name:'Using props to pass data',
  exercises2: 7
},
{
  name:'State of a component',
  exercises3: 14
}

]
  return (
    <>
     <div>

    <Header course= {course} />  

    <Content parts = {parts}/>
    

     <Total parts = {parts}/>

      
     </div>
    </>
  )
}

const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) =>{
  return (
    <>
    <Part1 part1 = {props.parts[0].name} exercises1 = {props.parts[0].exercises1} />
    <Part2 part2 = {props.parts[1].name} exercises2 = {props.parts[1].exercises2} />
    <Part3 part3 = {props.parts[2].name} exercises3 = {props.parts[2].exercises2} />
     
      <p>
        {props.parts[2].name} {props.parts[2].exercises3}
      </p> 
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>number of exercises {props.parts[0].exercises1 + props.parts[1].exercises2 + props.parts[2].exercises3}</p>
    </>
  )
}

const Part1 = (props) => {
  return(
    <>
        <p>
        {props.part1} {props.exercises1}
      </p>
    </>
  )
}

const Part2 = (props) => {
  return (
    <>
      <p>
        {props.part2} {props.exercises2}
      </p>
    </>
  )
}

const Part3 = (props) => {
  return (
    <>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  )
}

export default App
