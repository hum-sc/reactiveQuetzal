import React, { useEffect, useState } from "react";

export default function useBattery(){
    const [charge, setCharge] = useState(0);
    const [timeDuration, setTimeDuration] = useState(0);
    const [distanceDuration, setDistanceDuration] = useState(0);
    function aleatorio(inferior, superior) {
        var numPosibilidades = superior - inferior;
        var aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }
    function updateCharge(){
        setCharge(aleatorio(0,100))
    }
    function updateData (){
        setTimeDuration((charge/100)*12);
        setDistanceDuration((charge/100)*600);
    }

    useEffect(()=>{
        let bat = setInterval(updateCharge, 1000);

        return ()=>clearInterval(bat);
    })

    useEffect(updateData, [charge])

    return [charge, timeDuration.toFixed(0), distanceDuration.toFixed(0)];
}