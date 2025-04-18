
function App() {
const course = 'Half Stack application development'
const part1 = {
  name: 'Fundamentals of React',
  exercises1:10
}
const part2 = {
  name:'Using props to pass data',
  exercises2: 7
} 

const part3 = {
  name:'State of a component',
  exercises3: 14
}

  return (
    <>
     <div>

    <Header course= {course} />  

    <Content part1 = {part1.name} exercises1 = {part1.exercises1}/>
    <Content part2 = {part2.name} exercises2 = {part2.exercises2}/>
    <Content part3 = {part3.name} exercises3 = {part3.exercises3}/>

     <Total exercises1 = {part1.exercises1} exercises2 = {part2.exercises2} exercises3 = {part3.exercises3}/>

      
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
    <Part1 part1 = {props.part1} exercises1 = {props.exercises1} />
    <Part2 part2 = {props.part2} exercises2 = {props.exercises2} />
    <Part2 part3 = {props.part3} exercises3 = {props.exercises3} />
     
      <p>
        {props.part3} {props.exercises3}
      </p> 
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
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
