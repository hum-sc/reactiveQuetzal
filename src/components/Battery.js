import React from "react";
import BatteryIcon from "../../public/media/images/BatteryIcon";
import '../../public/styles/battery.css'
export default function Battery (props){
    const charge = 100;
    const duration = 0;
    const kmAprox = 0;
    
    
    return <div className="batteryContainer">
        <BatteryIcon className='batteryIcon' color='var(--principal)'/>
        <h3 className="charge">{charge}%</h3>
        <p className="auxiliar duration">{duration}h aprox.</p>
        <p className="auxiliar km">{kmAprox}km aprox.</p>
    </div>
}