// A simple function component that returns JSX
function Greeting(props) {
  // A variable that holds a JSX expression
  const name = <span className="name">{props.name}</span>
  // A JSX element that uses the variable and a prop
  return (
    <h1>
      Hello, {name}! You are {props.age} years old.
    </h1>
  )
}

// A class component that renders the function component
class App extends React.Component {
  render() {
    // A JSX fragment that contains two instances of the function component
    return (
      <>
        <Greeting name="Alice" age={25} />
        <Greeting name="Bob" age={30} />
      </>
    )
  }
}

// Rendering the class component using JSX
ReactDOM.render(<App />, document.getElementById('root'))

// A custom component that takes props
function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

// A component that uses the spread operator to pass props
function App() {
  // An object that contains props
  const cardProps = {
    title: 'JSX',
    description: 'JSX is awesome!',
  }
  // Passing the props using the spread operator
  return <Card {...cardProps} />
}

// A component that uses conditional rendering
function Greeting(props) {
  // A variable that holds a JSX expression
  const message = props.isLoggedIn ? (
    <h1>Welcome back, {props.name}!</h1> // Using ternary operator
  ) : (
    <h1>Please log in.</h1>
  )
  // A JSX element that uses the variable
  return <div>{message}</div>
}

// A component that uses map() to render a list
function List(props) {
  // A variable that holds an array of JSX elements
  const items = props.items.map(
    (item) => <li key={item.id}>{item.name}</li>, // Using keys to identify items
  )
  // A JSX element that uses the variable
  return <ul>{items}</ul>
}
