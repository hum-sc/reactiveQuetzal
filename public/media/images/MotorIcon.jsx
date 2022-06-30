import React from "react";

export default function MotorIcon(props){
    return (
        <svg className={props.className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle cy='8'cx='8' r='5' stroke={props.color} fill='none' strokeWidth={2}/>
            <circle cy='9'cx='18' r='2' stroke={props.color} fill='none' strokeWidth={2}/>
            <circle cy='18'cx='15' r='3' stroke={props.color} fill='none' strokeWidth={2}/>
        </svg>
    );
}