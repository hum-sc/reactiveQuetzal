import React, { useContext, useEffect, useState } from "react";

import CloseIcon from "../../../public/media/images/CloseIcon";
import DirectionsIcon from "../../../public/media/images/DirectionsIcon";

import { GpsContext } from "../../context/gpsContext";
import { RouteContext } from "../../context/routeContext";

import '../../../public/styles/map.css'
import RouteCreator from "./RouteCreator";
import RouteContent from "./RouteContent";


const principal = 'var(--principal)'

/**
 * Se encarga de mostrar la interfaz del gestor de rutas
 * Recibe como props obligatorios 
 * 
 * center que tiene la forma de [lng, lat] este es el 
 * centro del mapa.
 * 
 * fly que es la funcion que activa la animacion del mapa al abrir o
 * cerrar el gestor de rutas
 * 
 * 
 * 
 * @param {*} props 
 * @returns 
 */
export default function RouteManager(props){

    const route = useContext(RouteContext);
    const gps = useContext(GpsContext);
    
    const trueFocus = () => {

        route.setFocus(true);
        props.fly(props.center,0, 15);

    }
    
    const onClose = () => {

        route.setFocus(false);
        route.setTravel(false)
        props.close();
        props.fly([gps.lng, gps.lat], 75, 18);

    }

    const onTravel = () => {
        props.fly([gps.lng, gps.lat], 75, 18)
    }
    return(

        <div className="routeManager" id = {(route.isFocused) ? 'opened' : 'closed'} >
            { (route.isFocused) ? 
                <div className="routeEditor">
                    <div className="routeEditorHeader">
                        {(route.isTraveling) ? <h4>Navegando</h4>: <h4>Selecciona la ruta</h4>}
                        <CloseIcon className='routeIcon' id='close' color={principal} onClick={onClose}/>
                    </div>
                    {(!route.isTraveling) ? <RouteCreator onTravel={onTravel}/> : <RouteContent/>}

                </div> : <DirectionsIcon className='routeIcon' id='directions' onClick={trueFocus} color={principal}/> }
        </div>

    )
}

