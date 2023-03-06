const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  
      const Header = () => {
        return (
          <div>
            <h1>{courses.name}</h1>
          </div>
        )
      }
  
      const Part = (props) => {
        return (
          <div>
            <p>{props.part.name} {props.part.exercises}</p>
          </div>
        )
      }
        
      const Content = (props) => {
        return (
          <div>
            {props.parts.map(part => <Part id = {part.id} part = {part} />
            )}
          </div>
        )
      }
  
      const Total = (props) => {
        let exercises = props.parts.map(part => part.exercises);
        let total = exercises.reduce((part, exercises) => part + exercises)
  
        return (
          <b>
            Total of {total} exercises
          </b>
        )
      }
  
      //tähän vielä kurssien otsikot? Tällä hetkellä näkyy vain osiot, ei kurssia
      const Course = ({course}) => {
        return (
          <div>
            <Header course = {course.name} />
            <Content parts = {course.parts} />
            <Total parts = {course.parts} />
        </div>
        )
      }
  
    return (
      <div>
        <h1>Web development curriculum</h1>
         {courses.map(course => <Course id = {course.id} course = {course} /> )}
      </div>
    )
  }
  
  export default App