import React, { useContext, useState } from "react";

import CloseIcon from "../../../public/media/images/CloseIcon";
import DirectionsIcon from "../../../public/media/images/DirectionsIcon";

import { Gps } from "../../context/gpsContext";
import { Route } from "../../context/routeContext";

import '../../../public/styles/map.css'

const principal = 'var(--principal)'
export default function RouteManager(props){

    const route = useContext(Route);

    const gps = useContext(Gps);
    
    const trueFocus = () => {

        route.setFocus(true);
        props.fly(props.center,0, 15);

    }
    
    const falseFocus = () => {

        route.setFocus(false);
        props.fly([gps.lng, gps.lat], 75, 18);

    }
    
    return(

        <div className="routeManager" id = {(route.isFocused) ? 'opened' : 'closed'} >
            { (route.isFocused) ? <RouteEditor onClose={falseFocus} fly={props.fly}/> : <DirectionsIcon className='routeIcon' id='directions' onClick={trueFocus} color={principal}/> }
        </div>

    )
}

function RouteEditor(props){

    const route = useContext(Route);
    

    return(
        <div className="routeEditor">
            <CloseIcon className='routeIcon' id='close' color={principal} onClick={props.onClose}/>
            {(!route.isTraveling) ? <RouteCreator/> : <RouteContent/>}

        </div>
    );
}

function RouteCreator(props) {
    const setTravel = useContext(Route).setTravel;

    return (<></>)
}

function RouteContent(props){
    return(<></>)
}

