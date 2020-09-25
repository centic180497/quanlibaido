import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Marker, InfoWindow } from 'react-google-maps'
import { renderToStaticMarkup } from 'react-dom/server'
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel'
import './marker.css'
function MarkerParking(props) {
    const classes = useStyles()
    const { marker, lat, lng, id, showInfowindow } = props
    const markerClick = (id) => {
        showInfowindow(id)
    }
    const handleToggle = () => {
        props.cancleInforwindow()
    }
    var iconmarker = renderToStaticMarkup(
        <div className="marker">
        <div className="pin">
            <div className="tag">
                <strong />
            </div>
            <div className="background" style={{ backgroundImage: 'url(${this.url})' }} />
        </div>
    </div>
    )
    var icon = {
        path: 'M0,5a5,5 0 1,0 10,0a5,10 0 10,0 -10,0',
        fillOpacity: 1,
        strokeWeight: 5,
    }
    return (
        <div>
            {/* <MarkerWithLabel position={{ lat: lat, lng: lng }} key={id}>
                <div className="marker">
                    <div className="pin">
                        <div className="tag">
                            <strong />
                        </div>
                        <div className="background" style={{ backgroundImage: 'url(${this.url})' }} />
                    </div>
                </div>
            </MarkerWithLabel> */}
           

            <Marker
                position={{ lat: lat, lng: lng }}
                key={id}
                onClick={(e) => {
                    markerClick(marker.id)
                }}
                icon={icon}
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

const useStyles = makeStyles((theme) => ({
    // pin: {
    //     width: 34,
    //     height: 37,
    //     backgroundImage: 'linear-gradient(#9C27B0, #3F51B5)',
    //     borderRadius: '50%',
    //     padding: 3,
    //     position: 'relative',
    //     cursor: 'pointer',
    //     transition: '.3s ease-in-out',
    // },
    // tag: {},
    // background: {
    //     width: '100%',
    //     height: '100',
    //     borderRadius: '50%',
    //     backgroundSize: 'cover',
    //     border: '2px solid white',
    //     boxSizing: 'border-box',
    // },
}))
