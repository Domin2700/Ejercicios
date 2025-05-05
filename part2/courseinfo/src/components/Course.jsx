const Course = (course) => {
    return(
        <>
    <div>
    
    <Content parts = {course.courseApp}/>
    </div>
    
    </>
    )
}





const Header = (props) => {
     console.log('Header',props)
    return (
      <>
      <h1>{props.course.name}</h1>
      </>
    )
  }
  
  const Content = (props) => {
     console.log('Content',props)
    return (
      <>
  
  <h1>Web development curriculum</h1>
      {props.parts.map(course => (
        <div key={course.id}>
          <Header course = {course}/>
          <ul>
            {course.parts.map(part => (
            <Parts key = {part.id} parts = {part} />
            ))}
          </ul>
          <p>
            <Total course = {course}/>
          </p>
        </div>
      ))}
    


     
      </>
    )
  }
  
  const Total = (props) => {
    return (
      <>
      <strong>
              Total de ejercicios:{' '}
              {props.course.parts.reduce((sum, part) => sum + part.exercises, 0)}
     </strong>
      </>
    )
  }
  


const Parts = (props) => {
    return(
        <>
          <li>{props.parts.name} — {props.parts.exercises} ejercicios </li>
        </>
    )
}

  export default Course