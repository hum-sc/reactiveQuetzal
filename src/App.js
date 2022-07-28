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
import Battery from "./components/Battery";
import Velocimetro from "./components/Velocimetro";
import Solar from "./components/Solar";
//Aqui tendremos la logica

function App (){
    return (<>
        <div id="base">
            <LightsProvider>
                <Mirror/>
                <div className="widgetContainer">
                    <GpsProvider>
                        <RouteProvider>
                            <Map/>
                        </RouteProvider>
                    </GpsProvider>
                    <Solar/>
                    <Velocimetro/>
                    <HeatMap/>
                    
                    <Battery/>
                </div>
            </LightsProvider>
        </div>
        <div className="menu">
            <Clock/>
        </div>
    </>);
}

export default App

