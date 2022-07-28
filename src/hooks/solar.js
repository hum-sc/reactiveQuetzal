import React, { useEffect, useState } from "react";

export default function useSolar(){
    const [generate, setGenerate] = useState(0);
    function aleatorio(inferior, superior) {
        var numPosibilidades = superior - inferior;
        var aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }
    function updateGen(){
        setGenerate(aleatorio(0,999))
    }
    useEffect(()=>{
        let sol = setInterval(updateGen,1000);

        return ()=>clearInterval(sol);
    })
    return generate;
}