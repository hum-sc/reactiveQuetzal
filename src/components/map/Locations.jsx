
import React, { useContext, useEffect, useState, useSyncExternalStore } from "react";
import { RouteContext } from "../../context/routeContext";
import { reverseGeocoding } from "../../hooks/map/routing";

export default function Locations (props) {
    const route = useContext(RouteContext);

    const inputsValues = route.inputsValues;
    const setInputsValues = route.setInputsValues;
    const [isRouteCreated, setIsRouteCreated] = useState(false);
    const [distance, setDistance] = useState(0);
    const [duration, setDuration] = useState('');
    const selectedCoord = route.selectedCoord;

    const onCreate = async () => {
        await props.onCreate().then(value => {
            let generalInfo = value;

            let tmpDuration = Math.trunc(generalInfo.duration);
            let durationStr = '';
            if(tmpDuration >= 3600){
                let tmp = Math.trunc(tmpDuration/3600);
                durationStr += `${tmp} h `;

                tmpDuration -= tmp;
            }
            if (tmpDuration >= 60){
                let tmp = Math.trunc(tmpDuration/60);
                durationStr += `${tmp} min `

                tmpDuration = Math.trunc(tmpDuration - (60*tmp));
            }
            if (tmpDuration > 0)durationStr += `${tmpDuration} seg`

            let tmpDistance = Math.trunc(generalInfo.distance);
            let distanceStr = '';
            if(tmpDistance > 1000){
                let tmp= tmpDistance/1000;
                tmp = tmp.toFixed(2);
                distanceStr += `${tmp} km`
            } else {
                console.log(tmpDistance)
                distanceStr += `${tmpDistance} m`
            }
            console.log(distanceStr);


            setDistance(distanceStr);
            setDuration(durationStr);
            setIsRouteCreated(true)
        })
    }
    const onChangeInputValue = ( event ) => {

        let tmp = [...inputsValues];

        tmp[event.target.name] = event.target.value;
        console.log(tmp)
        setInputsValues(tmp)

    }

    /**
     * To do
     * @param {*} coordinate 
     * @returns 
     */
    const getCoordinateValue = async (coordinate) => {
        let value = await reverseGeocoding(coordinate)
        return value;
    }

    const onCoordinatesUpdate = async (coordinates) =>{

        let tmpValues = coordinates.map(async (coordinate, index) => {
            let data = await getCoordinateValue(coordinate);
            console.log(data);
            return data;
        });
        setInputsValues(tmpValues);
        
    }
    const selectedCoordUpdate = async () => {
        let tmpValues = [...inputsValues];
        tmpValues[route.coordId] = await getCoordinateValue(selectedCoord);
        setInputsValues(tmpValues)
    }

    const newCoord = ()=>{
        let id = route.coordinates.length;
        let tmp = [...inputsValues]
        tmp[id] = '';
        setInputsValues(tmp);
        route.setCoordId(id);
    }

    const onTravel = () => {
        props.onTravel();
        route.setTravel(true);
    }

    const onFocus = (event) => {
        route.setCoordId(event.target.name);
    }

    useEffect(()=>{
        selectedCoordUpdate();
    }, [selectedCoord])

    const items = inputsValues.map((value, index) => <input type='text' key={index} id={(index == route.coordId) && 'selected'} name={index} onChange={onChangeInputValue} value={value}  onFocus={onFocus}/>)
    return (
        <div className="locationsInputs">
            {items}
            <button onClick={newCoord}>Añadir destino</button>
            <button onClick={onCreate}>Crear ruta</button>
            {console.log(route.route.type)}
            {(isRouteCreated && route.route.type) && 
                <>
                    <p className="auxiliar">{distance}</p>
                    <p className="auxiliar">{duration}</p>
                    <button onClick = {onTravel}>Navegar</button>
                </>
            }
        </div>
    );

}