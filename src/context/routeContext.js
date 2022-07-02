import React, { createContext, useState } from "react";

export const Route = createContext({});

export default function RouteProvider (props) {
    const [isFocused, setFocus] = useState(false);
    const [isTraveling, setTravel] = useState(false);
    

    return(
        <Route.Provider value={
            {
                isFocused,
                isTraveling,
                setFocus,
                setTravel,
            }
        }>
            {props.children}
        </Route.Provider>
    );

}