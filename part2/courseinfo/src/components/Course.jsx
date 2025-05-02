const Course = (course) => {
    return(
        <>
    <div>
    <Header course= {course.courseApp} />  
    <Content parts = {course.courseApp.parts}/>
     <Total parts = {course.courseApp.parts}/>
    </div>
    
    </>
    )
}





const Header = (props) => {
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

      {props.parts.map( parts =>  <Parts key = {parts.id} parts = {parts}/> ) }

      </>
    )
  }
  
  const Total = (props) => {
    return (
      <>
      <p>total of {props.parts.reduce((sum, eje)=> sum + eje.exercises,0 )} exercises </p>
      </>
    )
  }
  


const Parts = (parts) => {
console.log('Parts', parts)
    return(
        <>
        <p>{parts.parts.name} {parts.parts.exercises}</p>
        </>
    )
}

  export default Course