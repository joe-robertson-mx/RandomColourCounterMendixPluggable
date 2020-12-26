import { ReactNode, createElement } from "react";
import { ColourCounter } from "./components/ColourCounterComponent";
import { hot } from "react-hot-loader/root";
import { ColourCounterContainerProps } from "../typings/ColourCounterProps";
import {Big} from "big.js"

import "./ui/ColourCounter.css";


const ColourCounterContainer = (props: ColourCounterContainerProps): ReactNode => {
    let value = props.Value

    console.log (value)

    function onUpdate (value: number): void {
        const big = new Big (value)
        props.Value.setValue(big)
    }
    if (value.status === "available") {
        return (<ColourCounter 
                    value={value}  
                    onUpdate= {onUpdate}/>)
    }
}

export default hot(ColourCounterContainer);