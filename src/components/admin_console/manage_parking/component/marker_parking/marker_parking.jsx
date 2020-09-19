import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Marker, InfoWindow } from 'react-google-maps'

function MarkerParking(props) {
    const classes = useStyles()
    const { marker, lat, lng, id } = props
    return (
        <div>
            <Marker position={{ lat: lat, lng: lng }} key={id}>
                <InfoWindow>
                    <p>skhvusids</p>
                </InfoWindow>
            </Marker>
        </div>
    )
}

export default MarkerParking

const useStyles = makeStyles((theme) => ({}))
