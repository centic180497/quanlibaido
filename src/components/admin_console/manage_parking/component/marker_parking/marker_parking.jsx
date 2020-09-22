import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Marker, InfoWindow } from 'react-google-maps'

function MarkerParking(props) {
    const classes = useStyles()
    const { marker, lat, lng, id, showInfowindow } = props
    const markerClick = (id) => {
        showInfowindow(id)
    }
    const handleToggle = () => {
        props.cancleInforwindow()
    }
    return (
        <div>
            <Marker
                position={{ lat: lat, lng: lng }}
                key={id}
                onClick={(e) => {
                    markerClick(marker.id)
                }}
            >
                {id === props.infowindow && (
                    <InfoWindow onCloseClick={handleToggle}>
                        <p>skhvusids</p>
                    </InfoWindow>
                )}
            </Marker>
        </div>
    )
}

export default MarkerParking

const useStyles = makeStyles((theme) => ({}))
