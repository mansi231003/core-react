import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,multiplyByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
   
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
          <button
          onClick={() => dispatch(multiplyByAmount([2,3]))}
        >
          multiply by 2
        </button>
      </div>
    </div>
  )
}