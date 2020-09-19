import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Marker } from 'react-google-maps'
import icon from 'assets/images/marker.jpg'
var iconmarker = {
    url: { icon },
    size: 30,
}
function NewMarker(props) {
    const classes = useStyles()
    console.log('sfjidshfsdfh')

    return (
        <div className={classes.newmarker}>
            <Marker position={{ lat: props.lat, lng: props.lng }} icon={iconmarker}></Marker>
        </div>
    )
}

export default NewMarker

const useStyles = makeStyles((theme) => ({}))
