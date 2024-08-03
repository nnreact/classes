import { useState } from "react"

function Counter() {

    const [currentValue, setCurrentValue] = useState(0);
    
    return (
        <div className="counter" onClick={() => setCurrentValue(currentValue + 1)}>Counter: {currentValue}</div>
    )
}

export default Counter