import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Tooltip } from '@material-ui/core'

import Slider from 'react-slick'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ShowChartIcon from '@material-ui/icons/ShowChart'

import './infoWindow.css'
import img from './1.webp'

const CustomInfoWindow = (props) => {
    const classes = useStyles()
    const settings = {
        dots: true,
        slidesToShow: 1,
    }
    return (
        <div>
            <InfoWindow>
                <div className={classes.infoWindow}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Slider {...settings}>
                                <div>
                                    <img alt="" src={img} className={classes.img} />
                                </div>
                                <div>
                                    <img alt="" src={img} className={classes.img} />
                                </div>
                                <div>
                                    <img alt="" src={img} className={classes.img} />
                                </div>
                                <div>
                                    <img alt="" src={img} className={classes.img} />
                                </div>
                            </Slider>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.marker.id}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {props.marker.address}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">
                                <DeleteIcon fontSize="small" />
                            </Button>
                            <Button size="small">
                                <EditIcon fontSize="small" />
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </InfoWindow>
        </div>
    )
}

export default CustomInfoWindow

const useStyles = makeStyles(() => ({
    infoWindow: {
        width: 274,
    },
    img: {
        objectFit: 'cover',
        width: 'auto',
    },
}))
