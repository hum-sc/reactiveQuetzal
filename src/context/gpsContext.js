import React, { createContext, useState } from "react";
export const Gps = createContext({});

export default function GpsProvider(props){
    const [lng, setLng] = useState(8.681495);
    const [lat, setLat] = useState(49.41461);
    return(
        <Gps.Provider value={
            {
                lat,
                lng
            }
        }
        >
            {props.children}
        </Gps.Provider>
    );
}