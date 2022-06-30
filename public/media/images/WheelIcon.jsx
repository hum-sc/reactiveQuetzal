import React from "react";

export default function WheelIcon(props){
    return(
        <svg className={props.className}
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <circle cy='12'cx='12' r='9' stroke={props.color} fill='none' strokeWidth={2}/>
            <circle cy='12'cx='12' r='4' stroke={props.color} fill='none' strokeWidth={2}/>
        </svg>
    );
}