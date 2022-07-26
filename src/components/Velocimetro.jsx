import React from "react";
import useSpeed from "../hooks/speed";
import '../../public/styles/velocimeter.css'
export default function Velocimetro (){
    const speed = useSpeed();
    return <div className="velocimetro">
            <h2>{speed}</h2>
            <svg id='velBar'>
                <circle id='clockBar' cy='60'cx='60' r='50' stroke='var(--secondary)' fill='none' strokeWidth={4} strokeDasharray={'0 156 '+((speed/240)*156)+' 0'}/>              
            </svg>
            <div className="line"/>
            <p className="auxiliar kmh" id="km">km</p>
            <p className="auxiliar kmh" id="h">h</p>
            <div className="line" id="kmh"/>
    </div>
}