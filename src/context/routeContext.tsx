import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import useObservableState from "../hooks/observer";
import { RemoveObserverAction, SetObservableStateAction, SetObserverAction} from '../types'
import {Props} from '../interfaces';
/**
 * hola
 */
interface Route{
    isFocused ?: boolean,
    isTraveling ?: boolean,
    coordId ?: Number,
    setCoordId ?: Dispatch<SetStateAction<number>>,
    setFocus ?: Dispatch<SetStateAction<boolean>>,
    setTravel ?: Dispatch<SetStateAction<boolean>>,

    selectedCoord ?: any[],
    setSelectedCoord ?: Dispatch<SetStateAction<any[]>>,
    addSelectedCoordObserver ?: SetObserverAction<Function>,
    removeSelectedCoordObserver ?: RemoveObserverAction<string | number>,

    route ?: {},
    setRoute ?: Dispatch<SetStateAction<{}>>,
    
    coordinates ?: any[],
    setCoordinates ?: Dispatch<SetStateAction<any[]>>,
    addCoordinatesObserver ?:  SetObserverAction<Function>,
    removeCoordinatesObserver ?: RemoveObserverAction<string | number>,

    instructions?: {},
    setInstructions?: Dispatch<SetStateAction<{}>>,

    inputsValues ?: any[],
    setInputsValues ?: Dispatch<SetStateAction<any[]>>,
}
/**
 * sa
 */
export const RouteContext = createContext<Route>({});

export function RouteProvider ({children}: Props): JSX.Element {
    const [isFocused, setFocus] = useState(false);
    const [isTraveling, setTravel] = useState(false);
    const [coordId, setCoordId]= useState(0);
    const [selectedCoord, setSelectedCoord, addSelectedCoordObserver, removeSelectedCoordObserver] = useObservableState([]);
    const [route, setRoute] = useState({});
    const [coordinates, setCoordinates, addCoordinatesObserver, removeCoordinatesObserver] = useObservableState([]);
    const [instructions, setInstructions] = useState([]);
    const [inputsValues, setInputsValues] = useState(['']);
    return(
        <RouteContext.Provider value = {
            {
                isFocused,
                isTraveling,
                coordId,
                selectedCoord,
                route,
                coordinates,
                instructions,
                inputsValues,

                setInputsValues,

                setInstructions,

                setCoordId,
                
                setFocus,
                
                setTravel,
                
                //SelectedCoord
                setSelectedCoord,
                addSelectedCoordObserver,
                removeSelectedCoordObserver,
                
                //Route
                setRoute,

                setCoordinates,
                addCoordinatesObserver,
                removeCoordinatesObserver,

            }
        }
        >
            {children}
        </RouteContext.Provider>
    );

}