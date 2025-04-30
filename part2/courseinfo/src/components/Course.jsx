const Course = (course) => {
    console.log(course)
    return(
        <>
    <div>
    <Header course= {course.courseApp.name} />  
    <Content parts = {course.courseApp.parts}/>
     <Total parts = {course.courseApp.parts}/>
    </div>
    
    </>
    )
}





const Header = (props) => {
    console.log('Header', props.course.course)
    return (
      <>
      <h1>{props.course.couser}</h1>
      </>
    )
  }
  
  const Content = (props) => {
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
      <p>number of exercises {props.parts[0].exercises1 +
       props.parts[1].exercises2 +
        props.parts[2].exercises3}</p>
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

  export default Course