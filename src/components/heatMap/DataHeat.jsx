import React from "react";
import BrakeIcon from "../../../public/media/images/BrakeIcon";
import MotorIcon from "../../../public/media/images/MotorIcon";
import WheelIcon from "../../../public/media/images/WheelIcon";
const principal = 'var(--principal)'
export default function Data(props){
    
    return(
        <div className="dataHeat" id={props.id}>
            <div className="dataHeat-Item">
                <WheelIcon className='dataHeat-Icon' color={principal}/>
                <p className="auxiliar dataHeat-Text">{props.wheelHeat}°C</p>
            </div>
            <div className="dataHeat-Item">
                <BrakeIcon className='dataHeat-Icon' color={principal}/>
                <p className="auxiliar dataHeat-Text">{props.brakeHeat}°C</p>
            </div>
            {props.children}
        </div>
    );
}
export function DataSun(props){
    return (
        <div className="dataHeat" id={props.id}>
            <div className="dataHeat-Item">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.225 3.3375L3.1 2.21875L2.21875 3.1L3.3375 4.21875L4.225 3.3375ZM0.625 6.875H2.5V8.125H0.625V6.875ZM6.875 0.65625H8.125V2.5H6.875V0.65625ZM11.9 2.21562L12.78 3.095L11.6613 4.21375L10.7819 3.33375L11.9 2.21562ZM10.775 11.6625L11.8938 12.7875L12.775 11.9062L11.65 10.7875L10.775 11.6625ZM12.5 6.875H14.375V8.125H12.5V6.875ZM7.5 3.75C5.43125 3.75 3.75 5.43125 3.75 7.5C3.75 9.56875 5.43125 11.25 7.5 11.25C9.56875 11.25 11.25 9.56875 11.25 7.5C11.25 5.43125 9.56875 3.75 7.5 3.75ZM7.5 10C6.11875 10 5 8.88125 5 7.5C5 6.11875 6.11875 5 7.5 5C8.88125 5 10 6.11875 10 7.5C10 8.88125 8.88125 10 7.5 10ZM6.875 12.5H8.125V14.3438H6.875V12.5ZM2.21875 11.9L3.1 12.7812L4.21875 11.6562L3.3375 10.775L2.21875 11.9Z" fill={principal}/>
            </svg>

                <p className="auxiliar dataHeat-Text">{props.heat}°C</p>
            </div>
        </div>
    );
}

export function DataBack(props){
    return(
        <Data id={props.id} wheelHeat={props.wheelHeat} brakeHeat={props.brakeHeat}>
            <div className="dataHeat-Item">
                <MotorIcon className='dataHeat-Icon' color={principal}/>
                <p className="auxiliar dataHeat-Text">{props.motorHeat}°C</p>
            </div>
        </Data>
    );
}