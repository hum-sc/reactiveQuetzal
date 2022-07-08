
import React, { useContext } from "react"
import { RouteContext } from "../../context/routeContext"

export default function RouteContent(props){
    const routeContext = useContext(RouteContext);
    const instructions = routeContext.instructions;
    const segments = routeContext.inputsValues;

    const elements = segments.map((val, index) => {

        const steps = instructions[index].steps.map(value => <p className="auxiliar">{value.instruction}</p>);
        return (<>
            <h5>{val}</h5>
            {steps}
        </>)
    })

    return(
    <div className="routeContent">
        {elements}
    </div>)
}
