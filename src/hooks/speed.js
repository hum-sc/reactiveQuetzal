import React, { useEffect, useState } from "react";

export default function useSpeed(){
    const [speed, setSpeed] = useState(0);
    function aleatorio(inferior, superior) {
        var numPosibilidades = superior - inferior;
        var aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }

    function updateValue (){
        setSpeed(aleatorio(0,240))
    }
    useEffect(()=>{
        const interval = setInterval(updateValue, 1000);
        return ()=> clearInterval(interval);
    }
    )
    return speed
}