
export default async function CalculateRoute(start, end){
    const query = await fetch(
        'https://api.openrouteservice.org/v2/directions/driving-car/geojson',
        {
            method: 'POST',
            body: `{"coordinates":[[${start[0]},${start[1]}],[${end[0]},${end[1]}]]}`,
            headers: {
                'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
                'Authorization': '5b3ce3597851110001cf624892c4eb2ff2ea4a9b9c7bc5b091bdba24',
                'Content-Type': 'application/json; charset=utf-8'
        }});
    const json = await query.json();
    const data = json.features[0];
    const route = data.geometry.coordinates;
    const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'LineString',
            coordinates: route
        }
    };
    return geojson;
}