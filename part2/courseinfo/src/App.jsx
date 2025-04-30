import Course from "./components/Course"

function App() {
const course = {
name: 'Half Stack application development',
 parts: [
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

]}
  return <Course courseApp = {course}/>
}



export default App
