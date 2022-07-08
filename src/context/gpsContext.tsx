import React, { createContext, FC, ReactNode, useState } from "react";
import {Gps, Props} from '../interfaces'


export const GpsContext = createContext<Gps>({
    lat: 0,
    lng: 0
});



export function  GpsProvider ({children}: Props): JSX.Element {
    const [lng, setLng] = useState(-99.46785337072336);
    const [lat, setLat] = useState(19.26942918888649);
    return(
        <GpsContext.Provider value={
            {
                lat: lat,
                lng: lng
            }
        }
        >
            {children}
        </GpsContext.Provider>
    );

}

/*export function GpsProvider(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; }){
    const [lng, setLng] = useState(8.681495);
    const [lat, setLat] = useState(49.41461);
    return(
        <GpsContext.Provider value={
            {
                lat,
                lng
            }
        }
        >
            {props.children}
        </GpsContext.Provider>
    );
}
*/