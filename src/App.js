import React from "react";
import { useContext } from "react";
import Clock from "./components/Clock";
import Mirror from "./components/Mirror";
import '../public/styles/styles.css'
import LightsProvider from "./context/lightContext";
import HeatMap from "./components/heatMap/HeatMap";
import Map from "./components/map/Map";
import {GpsProvider} from "./context/gpsContext";
import {RouteProvider} from "./context/routeContext";
//Aqui tendremos la logica

function App (){
    return (<div id="base">
    <LightsProvider>
        <Mirror/>
        <GpsProvider>

            <RouteProvider>
                
                <Map/>
                
            </RouteProvider>
        </GpsProvider>
        <HeatMap/>
        <Clock/>
       
    </LightsProvider>
    </div>);
}

export default App

