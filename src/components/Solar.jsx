import React, { useEffect, useState } from "react";
import SolIcon from "../../public/media/images/SolIcon";
import { useHeatSensors } from "../hooks/heat";
import useSolar from "../hooks/solar";

import '../../public/styles/sol.css'
export default function Solar(props){
    const [,,,,,,,,,,,, panel] = useHeatSensors()
    const generate = useSolar();
    const [percentage, setPercentage] = useState(0);
    
    const updatePercentage=()=>{
        setPercentage( (generate/1500)*100 )//Generado / generacion maxima * 100
    }

    

    useEffect(updatePercentage,[generate]);
    return <div className="Solar">
        <SolIcon className='solIcon' color='var(--principal)'/>
        <h3 className="generate">{generate} mA</h3>
        <p className="percentage auxiliar auxiliarBold">{percentage.toFixed(2)}%</p>
        <p className="heat auxiliar">{panel}°C</p>
    </div>
}