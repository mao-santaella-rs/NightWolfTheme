import React, { useState, useEffect, useRef, useMemo, useCallback, useLayoutEffect, useImperativeHandle, useDebugValue, useReducer, useTransition, useDeferredValue, useContext, useErrorBoundary } from 'react'

const ExampleComponent = React.forwardRef((props, ref) => {
  const [state, setState] = useState(0)
  const stateRef = useRef(state)
  const memoizedValue = useMemo(() => state * 2, [state])
  const callback = useCallback(() => {}, [])
  const reducer = (state, action) => state
  const [stateFromReducer, dispatch] = useReducer(reducer, 0)
  const [startTransition, isPending] = useTransition()
  const deferredValue = useDeferredValue(state, { timeoutMs: 2000 })
  const context = useContext(React.createContext(null))

  useEffect(() => {
    console.log('useEffect')
    return () => console.log('cleanup useEffect')
  }, [])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    return () => console.log('cleanup useLayoutEffect')
  }, [])

  useImperativeHandle(ref, () => ({
    focus: () => console.log('focus'),
  }))

  useDebugValue(state)

  const [error, resetErrorBoundary] = useErrorBoundary()

  if (error !== null) {
    return <h1>Something went wrong: {error.message}</h1>
  }

  return (
    <div>
      <div>{state}</div>
      <div>{memoizedValue}</div>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={callback}>Callback</button>
      <button onClick={() => dispatch({ type: 'increment' })}>Dispatch</button>
      <button onClick={() => startTransition(() => setState(state + 1))}>Start Transition</button>
      <div>{deferredValue}</div>
      <div>{context}</div>
    </div>
  )
})

export default ExampleComponent
