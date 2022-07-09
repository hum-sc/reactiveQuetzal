
const api_key = process.env.ORS_API_KEY;

export default async function CalculateRoute(start, end){

    const query = await fetch(
        'https://api.openrouteservice.org/v2/directions/driving-car/geojson',
        {
            method: 'POST',
            body:JSON.stringify({
                coordinates: [start, ...end],
                instructions:true,
                language: 'es'
            }),
            headers: {
                Accept:  'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
                Authorization: api_key,
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
    )
    const json = await query.json();
    const data = json.features[0];
    const route = data.geometry.coordinates;
    const generalInfo = data.properties.summary;
    const segments = data.properties.segments;
    console.log(data.properties)
    const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'LineString',
            coordinates: route
        }
    };
    return [geojson, generalInfo, segments];
}

export async function reverseGeocoding(point){
    const query = await fetch(
        `https://api.openrouteservice.org/geocode/reverse?api_key=${api_key}&point.lon=${point[0]}&point.lat=${point[1]}`,
        {
            method:'GET',
            headers:{
                Accept: 'application/json, application/geo+json',
                'Content-Type': 'application/json; charset=utf-8'
            }
    });

    const json = await query.json();
    const data = json.features;

    let points = await data.map(value => {
        return {
            coordinate:value.geometry.coordinates,
            label: value.properties.label,
            distance:value.properties.distance
        }
    })
    let nearest;
    points.forEach((element, index) => {
        if (index == 0) nearest = element;

        if (element.distance < nearest.distance) nearest = element;
    });
    return nearest.label;
}