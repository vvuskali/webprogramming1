const Part = (props) => {
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
  }
    
const Content = (props) => {
  return (
    <div> 
      {props.parts.map(part => <Part key = {part.id} part = {part} /> )} 
    </div>
    )
  }

  const Total = (props) => {
    let exercises = props.parts.map(part => part.exercises);

    return (
      <b>
        Total of {exercises.reduce((part, exercises) => part + exercises)} exercises
      </b>
    )
  }

  const Course = ({course}) => {
    return (
      <div>
        <Header course = {course} />
        <Content parts = {course.parts} />
        <Total parts = {course.parts} />
      </div>
    )
  }

  export default Course
