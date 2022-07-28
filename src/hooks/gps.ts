import React, { useEffect, useState } from "react";

export default function useGps(){
    const geo = navigator.geolocation;
    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null);
    const updateGps = (e: { coords: { longitude: any; latitude: any; }; })=>{

        setLng(e.coords.longitude)
        setLat(e.coords.latitude)
    }
    const errorGps = () =>{
    }
    

    useEffect(()=>{
        const watch = geo.watchPosition(updateGps, errorGps)
        return ()=> geo.clearWatch(watch);
    })
    
    return [lng, lat]
}