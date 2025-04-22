import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useReducer,
  useRef,
  createContext,
  useContext,
  Component, // For Error Boundary Class Component
  Fragment, // Or use <> </> shorthand
} from 'react'
import PropTypes from 'prop-types' // For prop type validation example

// --- Constants ---
const API_ENDPOINT = '[https://api.example.com/data](https://api.example.com/data)' // Mock API endpoint
const THEME_COLORS = {
  light: { background: '#ffffff', text: '#000000' },
  dark: { background: '#282c34', text: '#ffffff' },
}

// --- Context API Example ---
// 1. Create Context
const ThemeContext = createContext('light') // Default value
const UserContext = createContext(null) // Context for user data

// --- Reducer Example (for more complex state) ---
// 2. Reducer Function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + (action.payload || 1) }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'RESET':
      return { count: 0 }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

// --- Custom Hook Example ---
// 3. Custom Hook for fetching data
function useFetchData(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        // In a real app: const response = await fetch(url);
        // if (!response.ok) throw new Error('Network response was not ok');
        // const result = await response.json();
        const result = { message: `Data fetched successfully from ${url}` } // Mock data
        setData(result)
      } catch (err) {
        setError(err.message || 'Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // Cleanup function (optional)
    return () => {
      // Abort fetch or other cleanup if needed
      console.log('Fetching cleanup')
    }
  }, [url]) // Dependency array: re-run effect if url changes

  return { data, loading, error }
}

// --- Higher-Order Component (HOC) Example ---
// 4. HOC to add a loading indicator prop
const withLoadingIndicator = (WrappedComponent) => {
  // Return a new component
  return function ComponentWithLoadingIndicator({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading component...</div>
    }
    // Render the original component with its props
    return <WrappedComponent {...props} />
  }
}

// --- Render Prop Component Example ---
// 5. Component using the Render Prop pattern
class MouseTracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { x: 0, y: 0 }
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  render() {
    // Call the render prop function passed by the parent, providing state
    return (
      <div
        style={{ height: '100px', border: '1px solid red' }}
        onMouseMove={this.handleMouseMove}
      >
        {/* Render whatever the parent wants, passing the mouse coordinates */}
        {this.props.render(this.state)}
      </div>
    )
  }
}
MouseTracker.propTypes = {
  render: PropTypes.func.isRequired,
}

// --- Error Boundary Example ---
// 6. Error Boundary (Must be a Class Component)
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorInfo: null }
  }

  // Called when an error is thrown in a descendant component
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  // Called after an error has been thrown by a descendant component
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({ errorInfo: errorInfo })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }

    // Normally, just render children
    return this.props.children
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}

// --- Child Component Examples ---

// 7. Basic Functional Component with Props & PropTypes
function Greeting({ name, messageCount = 0, user }) {
  // Use context
  const theme = useContext(ThemeContext)
  const currentUser = useContext(UserContext) // Can be null if not provided

  // Style object based on theme context
  const themeStyle = {
    backgroundColor: THEME_COLORS[theme]?.background || '#fff',
    color: THEME_COLORS[theme]?.text || '#000',
    padding: '10px',
    borderRadius: '5px',
    margin: '5px 0',
    border: `1px solid ${THEME_COLORS[theme]?.text || '#ccc'}`,
  }

  return (
    <div style={themeStyle}>
      {/* Conditional rendering with ternary */}
      <h2>{name ? `Hello, ${name}!` : 'Hello, Guest!'}</h2>
      {/* Conditional rendering with && */}
      {messageCount > 0 && <p>You have {messageCount} new messages.</p>}
      {/* Accessing nested prop */}
      {user?.profile?.bio && <p>Bio: {user.profile.bio}</p>}
      {/* Accessing context */}
      <p>Current Theme: {theme}</p>
      <p>Logged in User (from context): {currentUser?.username || 'None'}</p>
    </div>
  )
}

// PropTypes for type checking (optional with TypeScript)
Greeting.propTypes = {
  name: PropTypes.string,
  messageCount: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    profile: PropTypes.shape({
      bio: PropTypes.string,
    }),
  }),
}

// 8. Component demonstrating Hooks and Event Handling
function CounterComponent({ initialCount = 0 }) {
  // useState hook
  const [count, setCount] = useState(initialCount)
  const [step, setStep] = useState(1)

  // useReducer hook
  const [reducerState, dispatch] = useReducer(counterReducer, { count: 5 }) // Initial state for reducer

  // useRef hook (for accessing DOM elements or storing mutable values)
  const inputRef = useRef(null)
  const renderCount = useRef(0)

  // useEffect hook (runs after every render by default)
  useEffect(() => {
    document.title = `Count is ${count}`
    renderCount.current += 1
    console.log(
      `Component rendered ${renderCount.current} times. Current count: ${count}`,
    )

    // Cleanup function (runs before the next effect or on unmount)
    return () => {
      console.log(`Cleaning up effect for count: ${count}`)
      // Example: remove event listener, clear timer
    }
  }) // No dependency array: runs after every render

  // useEffect hook with dependency array (runs only when 'step' changes)
  useEffect(() => {
    console.log(`Step changed to: ${step}`)
  }, [step]) // Only re-run if 'step' changes

  // useCallback hook (memoizes the function instance)
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + step)
    // Dispatch action for reducer
    dispatch({ type: 'INCREMENT', payload: step })
  }, [step]) // Recreate function only if 'step' changes

  const handleDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - step)
    dispatch({ type: 'DECREMENT' })
  }, [step])

  // useMemo hook (memoizes the computed value)
  const isCountHigh = useMemo(() => {
    console.log('Calculating isCountHigh...') // See when this runs
    return count > 10
  }, [count]) // Recalculate only if 'count' changes

  // Function to focus the input using ref
  const focusInput = () => {
    inputRef.current?.focus() // Optional chaining for safety
  }

  return (
    <div style={{ border: '1px dashed blue', padding: '10px', margin: '10px 0' }}>
      <h3>Counter Component</h3>
      <p>Current Count (useState): {count}</p>
      <p>Current Count (useReducer): {reducerState.count}</p>
      <p>Step: {step}</p>
      <p>Count is {isCountHigh ? 'high' : 'low'}.</p>

      {/* Event handling */}
      <button onClick={handleIncrement}>Increment by {step}</button>
      <button onClick={handleDecrement}>Decrement by {step}</button>
      <button onClick={() => setCount(initialCount)}>Reset useState</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset useReducer</button>

      <div>
        <label htmlFor="stepInput">Step Amount: </label>
        <input
          id="stepInput"
          ref={inputRef} // Assign ref to the input element
          type="number"
          value={step}
          onChange={(event) => setStep(Number(event.target.value))} // Inline event handler
        />
        <button onClick={focusInput}>Focus Step Input</button>
      </div>
    </div>
  )
}
CounterComponent.propTypes = {
  initialCount: PropTypes.number,
}

// 9. Component demonstrating List Rendering and Keys
function ItemList({ items }) {
  if (!items || items.length === 0) {
    return <p>No items to display.</p> // Conditional rendering: Early return
  }

  return (
    <Fragment>
      {' '}
      {/* Or <> */}
      <h4>Item List</h4>
      {/* List rendering using map */}
      {/* Keys are crucial for React to efficiently update lists */}
      <ul>
        {items.map((item, index) => (
          // Use a stable ID if available, otherwise index (less ideal)
          <li key={item.id || index}>
            {item.name} ({item.category})
          </li>
        ))}
      </ul>
    </Fragment> // Or </>
  )
}
ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string,
    }),
  ),
}

// 10. Component designed to throw an error (for ErrorBoundary testing)
function BuggyComponent() {
  const [throwError, setThrowError] = useState(false)

  if (throwError) {
    throw new Error('Intentional crash for testing ErrorBoundary!')
  }

  return <button onClick={() => setThrowError(true)}>Click me to throw an error</button>
}

// 11. Component wrapped by HOC
const DataDisplay = ({ data }) => {
  return (
    <div>
      <h4>Data Display (potentially loaded)</h4>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
DataDisplay.propTypes = {
  data: PropTypes.any, // Type depends on actual data
}
const DataDisplayWithLoading = withLoadingIndicator(DataDisplay)

// --- Main App Component ---
function App() {
  // State for theme and user
  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState({
    id: 1,
    username: 'Alice',
    profile: { bio: 'React Developer' },
  })

  // State for item list
  const [items, setItems] = useState([
    { id: 'a1', name: 'Apple', category: 'Fruit' },
    { id: 'b2', name: 'Broccoli', category: 'Vegetable' },
    { id: 'c3', name: 'Chicken', category: 'Meat' },
  ])

  // Use the custom hook
  const {
    data: fetchedData,
    loading: dataLoading,
    error: dataError,
  } = useFetchData(API_ENDPOINT)

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  // Function to simulate login/logout
  const handleLoginLogout = () => {
    setUser(
      (currentUser) =>
        currentUser
          ? null // Simulate logout
          : { id: 2, username: 'Bob', profile: {} }, // Simulate login
    )
  }

  // Dynamic style object for the App container
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: THEME_COLORS[theme]?.background || '#fff',
    color: THEME_COLORS[theme]?.text || '#000',
    minHeight: '100vh',
    transition: 'background-color 0.3s, color 0.3s',
    // Example of where Tailwind classes might go:
    // className="font-sans p-5 bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen transition-colors duration-300"
  }

  return (
    // Provide context values to descendants
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <div style={appStyle} className="app-container">
          {' '}
          {/* Use style object and potentially CSS class */}
          <h1>React Syntax Showcase</h1>
          {/* --- Context Controls --- */}
          <button onClick={toggleTheme}>Toggle Theme (Current: {theme})</button>
          <button onClick={handleLoginLogout}>{user ? 'Logout' : 'Login'}</button>
          {/* --- Basic Component & Context Usage --- */}
          <Greeting name={user?.username} messageCount={5} user={user} />
          {/* Example without name prop */}
          <Greeting />
          {/* --- Hooks & Event Handling --- */}
          <CounterComponent initialCount={1} />
          {/* --- List Rendering --- */}
          <ItemList items={items} />
          <button
            onClick={() =>
              setItems([...items, { id: `d${items.length + 1}`, name: 'New Item' }])
            }
          >
            Add Item
          </button>
          {/* --- Custom Hook & Async Example --- */}
          <div>
            <h4>Async Data Fetching</h4>
            {dataLoading && <p>Loading data...</p>}
            {dataError && <p style={{ color: 'red' }}>Error: {dataError}</p>}
            {fetchedData && <pre>{JSON.stringify(fetchedData, null, 2)}</pre>}
          </div>
          {/* --- HOC Example --- */}
          <DataDisplayWithLoading isLoading={dataLoading} data={fetchedData} />
          {/* --- Render Prop Example --- */}
          <div>
            <h4>Render Prop: Mouse Tracker</h4>
            <MouseTracker
              render={({ x, y }) => (
                // This JSX is rendered by MouseTracker, receiving state via props
                <p>
                  The current mouse position is ({x}, {y})
                </p>
              )}
            />
          </div>
          {/* --- Error Boundary Example --- */}
          <div>
            <h4>Error Boundary Test</h4>
            <ErrorBoundary>
              <p>This component is inside the error boundary.</p>
              <BuggyComponent />
            </ErrorBoundary>
          </div>
          {/* --- Styling Examples --- */}
          <div
            style={{
              marginTop: '20px',
              padding: '10px',
              border: '1px solid currentColor',
            }}
          >
            <p style={{ color: 'purple', fontWeight: 'bold' }}>Inline Styled Paragraph</p>
            {/* className would be used for CSS Modules or global CSS */}
            {/* <p className={styles.myModuleClass}>Styled with CSS Modules</p> */}
            {/* <p className="global-utility-class">Styled with Global/Utility CSS</p> */}
          </div>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App // Export the main component
