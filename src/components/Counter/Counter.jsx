import { useState } from 'react'
import style from './Counter.module.css'

function Counter() {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleRest = () => {
        setCount(count - 1)
    }

    return (
        <div className={style.Counter}>
            <p>{count}</p>
            <button onClick={handleAdd}> + </button>
            <button onClick={handleRest}> - </button>
        </div>
    )
}

export default Counter


