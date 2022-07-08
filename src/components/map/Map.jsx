import React, { useRef, useEffect, useState, useContext } from "react";
import mapboxgl from 'mapbox-gl'

import CalculateRoute from "../../hooks/map/routing";
import RouteManager from "./RouteManager"

import '../../../public/styles/map.css'
import { GpsContext } from "../../context/gpsContext";
import { RouteContext } from "../../context/routeContext";
import { useStateObserver } from "../../hooks/observer";


mapboxgl.accessToken = process.env.MB_API_KEY

export default function Map(){
    //Estados
    const [zoom, setZoom] = useState(18);
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    //El contexto
    const gps = useContext(GpsContext);
    const route = useContext(RouteContext);
    const setSelectedCoord = route.setSelectedCoord;
    const selectedCoord = route.selectedCoord;

    //Referencias
    const mapContainer = useRef(null);
    const map = useRef(null);

    const generateMap = ()=>{
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/hum-sc/cl51l19on000m14qkrntg7f4m',
            center: [gps.lng, gps.lat],
            zoom: zoom,
            bearing:15,
            pitch: 75
            });
    }

    /**
     * Dibuja la ruta que se pasa como data
     * Esta funcion la llama el observador de route.route
     * @param {*} data 
     */
    const drawRoute = (data) => {
        if(!map.current.loaded()) return;
        if (map.current.getSource('route')){
            map.current.getSource('route').setData(data);
        }
        else {
            map.current.addLayer({
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: data
                },
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#3ad40a',
                    'line-width': 5,
                    'line-opacity': 0.75
                }
            });
        }
    }

    
    const close = ()=>{
        route.setCoordId(0);
        route.setCoordinates([]);
        route.setSelectedCoord([]);
        route.setInputsValues(['']);
        if(map.current.getSource('route')) {
            map.current.removeLayer('route')
            map.current.removeSource('route')
        }
        for (let i = 0; i <= route.coordId; i++){
            if (map.current.getSource(`point-${i}`)){
                map.current.removeLayer(`point-${i}`)
                map.current.removeSource(`point-${i}`)
            }
        }
    }

    /**
     * Se encarga de generar la animacion de la camara del mapa
     * si la obtienes
     * @param {*} center 
     * @param {*} pit 
     * @param {*} zom 
     */ 
    function fly (center, pit, zom) {
        map.current.flyTo(
            {
                center: center,
                zoom: zom,
                pitch: pit,
                duration: 1000,
                essential: true
            }
        )
    }
    /**
     * Obtiene la coordenada donde se hizo click en el mapa y dibuja
     * un indicador
     * 
     * Esta funcion es llamada por el evento mapa.current.on(´click´, )
     * @param {*} e 
     */
    const getCordinate = (e) => {

        const coord = [e.lngLat.lng, e.lngLat.lat];
        setSelectedCoord(coord);
        const data = {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: coord
                }
              }
            ]
        };

        if (map.current.getLayer(`point-${route.coordId}`)){
            map.current.getSource(`point-${route.coordId}`).setData(data)
        } else{
            map.current.addLayer({
                id: `point-${route.coordId}`,
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [
                          {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                              type: 'Point',
                              coordinates: coord
                            }
                          }
                        ]
                    }
                },
                paint: {
                    'circle-radius': 10,
                    'circle-color': '#f30'
                }
            })
        }
    }

    /**
     * Actualiza los estados lng, lat y el zoom, esta funcion se 
     * manda a llamar cada que se mueve el mapa,
     * estos estados suelen usarse para la animacion cuando 
     * se entra al modo de creacion de ruta
     */
    const updateMapData = () => {   
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));

    }

    

    //Se encarga de crear el mapa y poner los valores iniciales
    useEffect(()=>{
        if (map.current) return; // initialize map only once
        generateMap();
        updateMapData();
    },[]);

    //Crea el listening del click
    useEffect(()=>{
        if (!map.current) return;
        if (!route.isTraveling && route.isFocused){
            map.current.on('click', getCordinate);

            return () => map.current.off('click', getCordinate);
        }
    });


    //Actualiza la lat, lng y zoom de acuerdo al centro del mapa, no afecta al gps
    useEffect(() => {
        if (!map.current) return; // espera a crear el mapa
        map.current.on('move', updateMapData);

        return () => map.current.off('move', updateMapData);
    });
    // Escucha los cambios en la ruta
    useEffect(() => drawRoute(route.route), [route.route]);
    
    return(
        <div className="navigationMap">
           <RouteManager  fly = {fly} center = {[lng,lat]} close={close}/> 
            <div ref={mapContainer} className='map-container'/>

        </div>
    );
}