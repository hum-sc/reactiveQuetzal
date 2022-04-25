import React from "react";
import Clock from "./components/Clock";
import Mirror from "./components/Mirror";
import '../public/styles/styles.css'
//Aqui tendremos la logica
const clock = <Clock></Clock>
function App (){
    return (<div id="base">
    <Mirror/>
    <Clock/>
    </div>);
}

export default App
