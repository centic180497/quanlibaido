import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardActions, CardContent, IconButton, Tooltip } from '@material-ui/core'
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core'
function ItemParking(props) {
    const classes = useStyles()
    const { camera, editFormData, infowindow } = props
    console.log("camera",camera);
    const [open, setOpen] = React.useState(false)
    const showformdata = (camera) => {
        editFormData(camera)
    }
    const itemActive = (e, id) => {
        e.stopPropagation()
        props.showInfowindow(id)
    }
    const showAlert = (e) => {
        e.stopPropagation()
        setOpen(true)
    }
    const handleClose = (e) => {
        setOpen(false)
    }
    
    
    return (
        <div className={classes.listitem}>
            <Card className={infowindow === camera.id ? classes.cardActive : classes.card} onClick={(e) => itemActive(e, camera.id)}>
                <div className={classes.image}></div>
                <CardContent className={classes.contentCard}>
                    <Typography gutterBottom variant="h5" className={classes.nameCamera}>
                        {camera.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.address} noWrap>
                        {camera.district}
                    </Typography>
                    <CardActions className={classes.cardActions}>
                        <Tooltip title="Xóa" arrow className={classes.tooltip}>
                            <IconButton size="small" onClick={(e) => showAlert(e)}>
                                <DeleteIcon className={classes.icon} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Sửa" arrow className={classes.tooltip}>
                            <IconButton size="small" onClick={() => showformdata(camera)}>
                                <EditIcon className={classes.icon} />
                            </IconButton>
                        </Tooltip>
                    </CardActions>
                </CardContent>
            </Card>
            {open ? (
                <div className={classes.dialog}>
                    <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">Let Google help apps determine location.</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={(e) => handleClose(e)}>
                                Disagree
                            </Button>
                            <Button color="primary" autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            ) : null}
        </div>
    )
}
export default ItemParking

const useStyles = makeStyles((theme) => ({
    listitem: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        flex: 1,
    },
    card: {
        display: 'flex',
        cursor: 'pointer',
        marginBottom: 5,
        background: 'transparent',
    },
    cardActive: {
        background: '#00000014',
        display: 'flex',
        cursor: 'pointer',
        marginBottom: 5,
    },
    image: {
        width: 130,
        display: 'block',
    },
    img: {
        width: '100%',
        paddingTop: '56%',
    },
    contentCard: {
        padding: '6px 0px 0 20px !important',
    },
    nameCamera: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 0,
    },
    address: {
        fontSize: 13,
        color: 'black',
    },
    icon: {
        padding: 6,
    },
    cardActions: {
        padding: 0,
    },
    tooltip: {
        // padding: 0,
    },
}))
