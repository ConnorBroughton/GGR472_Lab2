mapboxgl.accessToken = 'pk.eyJ1IjoiY29ubm9yYnJvdWdodG9uIiwiYSI6ImNtNmllajk3dDA4MnYya29vcmRhZ3pmMmkifQ.rVteR2UEyh7d5e4JIP3zCA'

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/connorbroughton/cm6zsmly300tm01sbgsmlem1f',
    center: [
        -79.39865237301687,
        43.662343395037766
    ],
    zoom: 9,
});
