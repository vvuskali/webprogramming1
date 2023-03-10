import { useState } from 'react'

const Statistics = (props) => {
  let sum = 0
  const Average = () => {
    props.all.forEach(value => {
      sum += value
    })
    return sum/props.all.length
  }

  const Positives = () => {
    const positives = props.all.filter   
    return positives.length/props.all.length*100
  }

   //näyttää palautteen vain, jos sitä on annettu
  if (props.all.length === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  const StatisticLine = (props) => {
    return (
        <div>{props.text} {props.value}</div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
        <p>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
        </p>
        <div>Average {Average(props.all)}</div>
        <div>Positives {Positives(props.all)}</div>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])

  const goodClick = () => {
    all.push(1)
    setAll(all)
    setGood(good +1)
  }

  const neutralClick = () => {
    all.push(0)
    setAll(all)
    setNeutral(neutral +1)
  }

  const badClick = () => {
    all.push(-1)
    setAll(all)
    setBad(bad +1)
  }

  return (
    <div>
      <h1>Feedback</h1>
          <button onClick={goodClick}>good</button> 
          <button onClick={neutralClick}>neutral</button>
          <button onClick={badClick}>bad</button>
          <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App
