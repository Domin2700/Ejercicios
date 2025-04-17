
function App() {
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2= 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14
  return (
    <>
     <div>

    <Header course= {course} />  
      
    <Content part1 = {part1} exercises1 = {exercises1}/>
    <Content part2 = {part2} exercises2 = {exercises2}/>
    <Content part3 = {part3} exercises3 = {exercises3}/>

     <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>

      
     </div>
    </>
  )
}

function Header(props) {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

function Content(props) {
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

function Total(props) {
  return (
    <>
    <p>number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

function Part1(props) {
  return(
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </>
  )
}

function Part2(props) {
  return (
    <>
      <p>
        {props.part2} {props.exercises2}
      </p>
    </>
  )
}

function Part3(props) {
  return (
    <>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  )
}

export default App
