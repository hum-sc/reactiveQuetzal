import React from "react";
import BatteryIcon from "../../public/media/images/BatteryIcon";
import '../../public/styles/battery.css'
import useBattery from "../hooks/battery";
export default function Battery (props){
    const [charge, timeDuration, distanceDuration] = useBattery();
    
    
    return <div className="batteryContainer">
        <BatteryIcon className='batteryIcon' color='var(--principal)'/>
        <h3 className="charge">{charge}%</h3>
        <p className="auxiliar duration">{timeDuration} h aprox.</p>
        <p className="auxiliar km">{distanceDuration} km aprox.</p>
    </div>
}