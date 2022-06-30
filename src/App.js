import React from "react";
import { useContext } from "react";
import Clock from "./components/Clock";
import Mirror from "./components/Mirror";
import '../public/styles/styles.css'
import LightsProvider from "./context/lightContext";
import HeatMap from "./components/heatMap/HeatMap";
//Aqui tendremos la logica

function App (){
    return (<div id="base">
    <LightsProvider>
        <Mirror/>
        <Clock/>
        <HeatMap id="horizontal"/>
    </LightsProvider>
    </div>);
}

export default App
