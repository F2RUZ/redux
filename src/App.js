import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT, RESET } from './actions'


const App = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state)
  return (
    <div className='app'>
      <h1>Count : {data}</h1>
      <div className="btns">
        <button onClick={() => {
          dispatch(INCREMENT)
        }}>+</button>
        <button
          onClick={() => {
            dispatch(DECREMENT)
          }}
        >-</button>
        <button onClick={() => {
          dispatch(RESET)
        }}>RESET</button>
      </div>
    </div>
  )
}

export default App