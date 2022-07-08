
import React, { useContext, useEffect, useState, useSyncExternalStore } from "react";
import { GpsContext } from "../../context/gpsContext";
import { RouteContext } from "../../context/routeContext";
import CalculateRoute, { reverseGeocoding } from "../../hooks/map/routing";
import Locations from "./Locations";

/**
 * Interfaz para crear las rutas
 * 
 * @param {*} props 
 * @returns 
 */
export default function RouteCreator(props) {
    const route = useContext(RouteContext);
    const gps = useContext(GpsContext);
    
    const coordId = route.coordId;
    const coordinates = route.coordinates;
    const setCoordinates = route.setCoordinates;

    const selectCoordinate = (coordinate=[1,1]) => {
        let coords = [...coordinates];
        coords[coordId] = coordinate;
        setCoordinates(coords);
    }

    const createRoute = async ()=>{
        const data = [];
        for (const [key, coordinate] of Object.entries(coordinates)) {
            data.push(coordinate);
        }
        const points =  data.join('],[');

        const [routeData, generalInfo, segments] = await CalculateRoute([gps.lng, gps.lat], data);

        route.setRoute(routeData);
        route.setInstructions(segments);
        return generalInfo
    }

    useEffect(()=>{
        route.addSelectedCoordObserver('routeCreator', selectCoordinate);

        return () => route.removeSelectedCoordObserver('routeCreator');
    })

    return (<div className="routeCreator">
        <Locations onTravel = {props.onTravel} onCreate = {createRoute}/>
    </div>)
}

