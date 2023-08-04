import { useState } from "react";
import classes from './Counter.module.scss'

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleButtonClick = () => { 
        setCount(count + 1);
     }

    return <div>
        <p>{count}</p>
        <button className={classes.button} onClick={handleButtonClick}>Увеличить счетчик</button>
    </div>
};
