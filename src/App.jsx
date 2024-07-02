import { useState } from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setCount } from './actions/counterAction';

function App() {
  const [currentCount, setCurrentCount] = useState(0);
  console.log('App <3')

  // ใช้สำหรับรับการเปลี่ยนแปลงของค่าที่ถูกเก็บอยู่ใน state
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      
        <div>
          <input 
            type="number" 
            value={currentCount} 
            onChange={(e) => setCurrentCount(e.target.value)}
          />
          <button onClick={() => dispatch(setCount(currentCount))}>Set count</button>
        </div>
      </div>
    </>
  )
}

export default App
