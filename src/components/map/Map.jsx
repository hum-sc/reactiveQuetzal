import React, { useRef, useEffect, useState, useContext } from "react";
import mapboxgl, { maxParallelImageRequests } from 'mapbox-gl'
import CalculateRoute from "../../hooks/map/routing";
import RouteManager from "./RouteManager";

import '../../../public/styles/map.css'
import { Gps } from "../../context/gpsContext";
import { Route } from "../../context/routeContext";
import LinkedList, { ListNode } from "../../dataStructures/linkedList";




mapboxgl.accessToken = process.env.ORS_API_KEY

export default function Map(){
    const [zoom, setZoom] = useState(18);
    const [lat, setLat] = useState(49.41461);
    const [lng, setLng] = useState(8.681495);

    const gps = useContext(Gps);
    const route = useContext(Route);

    const mapContainer = useRef(null);
    const map = useRef(null);

    const isCreating = (!route.isTraveling && route.isFocused);

    

    //Pide la ruta al servidor y la dibuja
    const createRoute = async (end) => {
        const route = await CalculateRoute([gps.lng, gps.lat], end);
        if (map.current.getSource('route')){
            map.current.getSource('route').setData(route);
        }
        else {
            map.current.addLayer({
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: route
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

    //Se encarga de crear el mapa y poner los valores iniciales
    useEffect(()=>{
        if (map.current) return; // initialize map only once    
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/hum-sc/cl51l19on000m14qkrntg7f4m',
        center: [gps.lng, gps.lat],
        zoom: zoom,
        bearing:15,
        pitch: 75
        });
    });

    useEffect(()=>{
        map.current.on('click', (event) => {
            const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
            const end = {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: coords
                  }
                }
              ]
            };
            if (map.current.getLayer('end')) {
              map.current.getSource('end').setData(end);
            } else {
              map.current.addLayer({
                id: 'end',
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
                          coordinates: coords
                        }
                      }
                    ]
                  }
                },
                paint: {
                  'circle-radius': 10,
                  'circle-color': '#f30'
                }
              });
            }
        });
    })
    //Actualiza la lat, lng y zoom de acuerdo al centro del mapa, no afecta al gps
    useEffect(() => {
        if (!map.current) return; // espera a crear el mapa
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    useEffect(()=>{
        const first = new ListNode(1);
        const second = new ListNode(2);
        const list = new LinkedList(first);
        list.add(second)
        console.log(list.current.data);
        list.print()
    },[])

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
    
    return(
        <div className="navigationMap">
           <RouteManager  fly = {fly} center = {[lng,lat]}/> 
            <div ref={mapContainer} className='map-container'/>

        </div>
    );
}