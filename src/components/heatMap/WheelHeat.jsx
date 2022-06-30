import React from 'react';

export function Wheel(props){
    return(
        <svg className='wheel' id={props.id} width="19" height="47" viewBox="0 0 19 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.8208" y="45.7283" width="44.2428" height="15.341" rx="4" transform="rotate(-90 1.8208 45.7283)" fill={props.fill} fillOpacity="0.5" stroke={props.stroke} strokeWidth="2"/>
        </svg>
    );
}
export function Motor(props){
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5.94214" y="6.64172" width="11.5607" height="5.78035" transform="rotate(90 5.94214 6.64172)" fill={props.fill}/>
            <rect x="23.2832" y="0.861328" width="23.1214" height="17.341" transform="rotate(90 23.2832 0.861328)" fill={props.fill}/>
        </svg>
    );
}
/**
 * Recibe como parametros un id, fillWheel, fillMotor, strokeWheel
 * @param {*} props
 * @returns 
 */
export function BackWheel(props){
    return(
        <div className='backWheel' id={props.id}>
            <Wheel fill={props.fillWheel} stroke={props.strokeWheel}/>
            <Motor fill = {props.fillMotor} />
        </div>
    );
}