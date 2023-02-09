import React from 'react'

const App = () => {
  const course = { 
      name: 'Half Stack application development',
      parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
        <p>{props.name} {props.exercises}</p>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <Part name={course.parts[0].name} exercises={course.parts[0].exercises}/>
        <Part name={course.parts[1].name} exercises={course.parts[1].exercises}/>
        <Part name={course.parts[2].name} exercises={course.parts[2].exercises}/>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Total {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course}/>
      <Total parts={course}/>
    </div>
  )
}

export default App
