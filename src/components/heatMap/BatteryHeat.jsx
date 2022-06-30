import React from 'react';

export default function Battery(props){
    return (
        <div className='battery'>
            <svg className='batteryDraw' width="57" height="139" viewBox="0 0 57 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="55" height="137" rx="4" fill={props.fill} fillOpacity="0.5" stroke={props.stroke} strokeWidth="2"/>
            </svg>
            <p className='batteryNumber auxiliar'>{props.heat}°C</p>
        </div>
    );
}