
import React, { useContext } from "react"
import { RouteContext } from "../../context/routeContext"

export default function RouteContent(props){
    const routeContext = useContext(RouteContext);
    const instructions = routeContext.instructions;
    const segments = routeContext.inputsValues;

    const elements = segments.map((val, index) => {

        const steps = instructions[index].steps.map((value, indx) => <p key={indx} className="auxiliar step">{value.instruction}</p>);
        return (<div className={index} key={index}>
            <h5>{val}</h5>
            {steps}
        </div>)
    })

    console.log(elements)

    return(
    <div className="routeContent">
        {elements}
    </div>)
}
