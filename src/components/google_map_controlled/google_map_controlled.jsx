import React from 'react'
import { compose, withProps} from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
const Map = (props) => {
    const mapOptionStyle = [
        {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }],
        },
        {
            featureType: 'transit.station',
            stylers: [{ visibility: 'off' }],
        },
    ]
    return (
        
        <GoogleMap
        options={{
            styles: mapOptionStyle,
        }}
        >
            {props.children}
        </GoogleMap>
    )
}
const withGoogleMaps = compose(
    withProps({
        polygonRef: React.createRef(),
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDb5xOZiLOJAtKJWj4spvQf3UEQvE-3sc4&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
)
export default withGoogleMaps(Map)
