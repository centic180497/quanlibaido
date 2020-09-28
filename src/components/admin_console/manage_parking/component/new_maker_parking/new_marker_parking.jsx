import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Marker } from 'react-google-maps'
import icon from 'assets/images/ic_parking.png'
function NewMarker(props) {
    var iconmarker = {
        url: icon,
        // Size: [40, 30],
        scaledSize: new window.google.maps.Size(50, 50),
    }

    const classes = useStyles()
    return (
        <div className={classes.newmarker}>
            <Marker position={{ lat: props.lat, lng: props.lng }} icon={iconmarker}></Marker>
        </div>
    )
}

export default NewMarker

const useStyles = makeStyles((theme) => ({}))
