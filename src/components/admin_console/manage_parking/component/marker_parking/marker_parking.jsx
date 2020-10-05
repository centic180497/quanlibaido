import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { Marker, InfoWindow } from 'react-google-maps'
import './marker.css'
import icon from "assets/images/ic_parking.png"
function MarkerParking(props) {
    // const classes = useStyles()
    const { marker, lat, lng, id, showInfowindow } = props
    const markerClick = (id) => {
        props.showInfowindow(id)
    }
    const handleToggle = () => {
        props.cancleInforwindow()
    }
    var iconmarker = {
        url: icon,
        scaledSize: new window.google.maps.Size(40,40)
    }
    return (
        <div>
            {/* <MarkerWithLabel>
                <div className="marker">
                    <div className="pin">
                        <div className="tag">
                            <strong />
                        </div>
                        <div className="background" style={{ backgroundImage: 'url(${this.url})' }} />
                    </div>
                </div>
            </MarkerWithLabel>  */}
           

            <Marker
                position={{ lat:parseFloat(lat), lng:parseFloat(lng)}}
                key={id}
                onClick={(e) => {
                    markerClick(marker._id)
                }}
                icon={iconmarker}
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

// const useStyles = makeStyles((theme) => ({

// }))
