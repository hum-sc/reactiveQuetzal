import React from "react";

export default function CloseIcon(props){
    return(<svg xmlns="http://www.w3.org/2000/svg" id={props.id} viewBox="0 0 48 48" onClick={props.onClick} className={props.className}>
            <path fill={props.color} d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/>
        </svg>);
}