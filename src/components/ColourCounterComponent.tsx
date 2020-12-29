import {ReactElement, createElement, useState, useEffect} from 'react'
import randomcolor from 'randomcolor';
import {EditableValue} from "mendix"


export interface RandomColourDisplayProps {
    value: EditableValue;
    onUpdate: (value: number) => void
}

export const ColourCounter = (props: RandomColourDisplayProps): ReactElement => {
    
    const [count, setCount] = useState (parseInt (props.value.displayValue))
    const [colour, setColour] = useState('')
    const onUpdate = props.onUpdate

    useEffect(() => {
        setColour(randomcolor());
        onUpdate (count)
      }, [count]);

    const sectionStyle = {
        color: colour,
    }

    function increment() {
        setCount(prevCount => prevCount + 1); 
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div>
            <p style={sectionStyle}>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>)
}