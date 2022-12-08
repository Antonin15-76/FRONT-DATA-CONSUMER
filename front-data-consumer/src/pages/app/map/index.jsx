import mapboxgl from 'mapbox-gl'
import { useEffect, useRef, useState } from 'react'
// import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'
import "mapbox-gl/dist/mapbox-gl.css"
import ReactDOM from "react-dom"
import codegrid from 'react-codegrid'

const Popup = ({ routeName, routeNumber, city, type }) => {
    console.log('jfdkfj')
    return (
        <div className="popup">
            <h3 className="route-name">{routeName}</h3>
            <div className="route-metric-row">
                <h4 className="row-title">Route #</h4>
                <div className="row-value">{routeNumber}</div>
            </div>
            <div className="route-metric-row">
                <h4 className="row-title">Route Type</h4>
                <div className="row-value">{type}</div>
            </div>
            <p className="route-city">Serves {city}</p>
        </div>
    )
}

const Map = () => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2YW50b25pbiIsImEiOiJjbGJldGhub2UwMnZvM291eXkxdmdzMng4In0.EkoXeKXA2Tb1o07YoCEc4Q'
    const mapContainer = useRef(null)
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }))
    // const map = useRef(null)
    const [lng, setLng] = useState(-70.9)
    const [lat, setLat] = useState(42.35)
    const [zoom, setZoom] = useState(3)

    useEffect(() => {
        // console.log(map)
        // if (map.current) return; // initialize map only once
        const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
        })

        // map.on("load", () => {
        //     // bus routes source
        //     // another example of using a geojson source
        //     // this time we are hitting an ESRI API that returns
        //     // data in the geojson format
        //     // see https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson
        //     map.addSource("bus-routes", {
        //       type: "geojson",
        //       data:
        //         "https://opendata.arcgis.com/datasets/4347f3565fbe4d5dbb97b016768b8907_0.geojson",
        //     })
      
        //     // bus routes - line layer
        //     // see https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#line
        //     map.addLayer({
        //       id: "bus-routes-line",
        //       type: "line",
        //       source: "bus-routes",
        //       paint: {
        //         "line-color": "#4094ae",
        //         "line-width": 4,
        //       },
        //     })
        //   })

        map.on("click", e => {
            console.log(e)
            // const features = map.queryRenderedFeatures(e.point, {
            //   layers: ["bus-routes-line"],
            // })
            // console.log(features)
            // if (features.length > 0) {
            //   const feature = features[0]
              // create popup node
              const coordinates = [e.lngLat.lng, e.lngLat.lat]

              fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${coordinates[1]}&lon=${coordinates[0]}&apiKey=8ffb1457d8744bde9921cd693e5ac4ff`)
              .then(response => response.json())
              .then(result => {
                if (result.features.length) {
                  const address = result.features[0].properties.formatted;
                  new mapboxgl.Popup().setLngLat(coordinates).setHTML(address).addTo(map);
                } else {
                  new mapboxgl.Popup().setLngLat(coordinates).setHTML("No address found").addTo(map);
                }
            })

              const popupNode = document.createElement("div")
              ReactDOM.render(
                <Popup
                  routeName="test"
                //   routeNumber={feature?.properties?.LineAbbr}
                //   city={feature?.properties?.City}
                //   type={feature?.properties?.RouteType}
                />,
                popupNode
              )
              popUpRef.current
                .setLngLat(e.lngLat)
                .setDOMContent(popupNode)
                .addTo(map)
            }
        //   }
          )
          return () => map.remove()
    })

    return (
        <div>
            <div 
            style={{
               backgroundColor: 'rgba(35, 55, 75, 0.9)',
               color: '#fff',
               padding: '6px 12px',
               fontFamily: 'monospace',
               zIndex: '1',
            //    position: 'absolute',
               top: '0',
               left: '0',
               margin: '12px',
               borderRadius: '4px'
            }}
            >
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} style={{ height: '500px', margin: '0px 6px', }} />
        </div>
    )

}

export default Map
