import React from 'react'
import { Tooltip, Paper, Tabs, Tab, Fab } from '@material-ui/core'
import { Scrollbars } from 'react-custom-scrollbars'
import { Add as AddIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import Seach from './component/seach_parking/seach_parking'
import Listitem from './component/listitem_paking/listitem_parking'
import FormAddPage from './component/form_parking'
import { isEmpty } from 'lodash'
import { GoogleMap } from 'react-google-maps'
import GoogleMapControlled from 'components/google_map_controlled/google_map_controlled'
import MarkerParking from 'components/admin_console/manage_parking/component/marker_parking'
import NewMarker from 'components/admin_console/manage_parking/component/new_maker_parking/new_marker_parking'
function ManageParking(props) {
    const classes = useStyles()
    const showModal = (e) => {
        props.showFormParking()
    }
    const greatPlaces = [
        { id: ' Camera 1 ', position: { lat: 16.07264, lng: 108.229916 }, address: 'Hòa Khê, Thanh Khê, Đà Nẵng' },
        { id: ' Camera 147 ', position: { lat: 16.061403, lng: 108.234527 }, address: 'Quan 3, Ngu Hanh Son, Đà Nẵng' },
        { id: ' Camera 123 ', position: { lat: 16.04969, lng: 108.222179 }, address: 'Duy Tan, Hai Chau, Đà Nẵng' },
        {
            id: ' Camera 167 ',
            position: { lat: 16.061114, lng: 108.2209 },
            address: 'Nguyen Van Linh, Hai Chau, Đà Nẵng',
        },
    ]
    const listCamera = [
        {
            id: 1,
            nameCamera: 'Camera 1',
            lat: 16.07264,
            lng: 108.229918,
            address: 'Hòa Khê, Thanh Khê, Đà Nẵng',
            type: 1,
            fee: [],
            totalSlot: 10,
            description: 'abcdabcd',
        },
        {
            id: 2,
            nameCamera: 'Camera 2',
            lat: 16.07265,
            lng: 108.22995,
            address: 'Quận ngũ hành sơn, Đà Nẵng',
            type: 1,
            fee: [],
            totalSlot: 10,
            description: 'abcdabcd',
        },
        {
            id: 3,
            nameCamera: 'Camera 3',
            lat: 16.07267,
            lng: 108.229952,
            address: 'Hải Châu, Đà Nẵng',
            type: 1,
            fee: [],
            totalSlot: 10,
            description: 'abcdabcd',
        },
        {
            id: 4,
            nameCamera: 'Camera 4',
            lat: 16.07269,
            lng: 108.229974,
            address: 'Hòa Minh, Liên Chiểu, Đà Nẵng',
            type: 2,
            fee: [
                { vehicle: 'Xe máy ', unit: '1 giờ', price: 10000 },
                { vehicle: 'Xe máy ', unit: '1 giờ', price: 10000 },
            ],
            totalSlot: 10,
            description: 'abcdabcd',
        },
        {
            id: 5,
            nameCamera: 'Camera 5',
            lat: 16.0727,
            lng: 108.229977,
            address: 'Hòa Minh, Liên Chiểu, Đà Nẵng',
            type: 2,
            fee: [
                { vehicle: 'Xe máy ', unit: '1 giờ', price: 10000 },
                { vehicle: 'Xe máy ', unit: '1 giờ', price: 10000 },
            ],
            totalSlot: 10,
            description: 'abcdabcd',
        },
        {
            id: 6,
            nameCamera: 'Camera 6',
            lat: 16.07275,
            lng: 108.229944,
            address: 'Hòa Minh, Liên Chiểu, Đà Nẵng',
            type: 2,
            fee: [
                { vehicle: 'Xe máy ', unit: '1 giờ', price: 10000 },
                { vehicle: 'Xe máy ', unit: '1 giờ', price: 10000 },
            ],
            totalSlot: 10,
            description: 'abcdabcd',
        },
        {
            id: 7,
            nameCamera: 'Camera 7',
            lat: 16.07277,
            lng: 108.229966,
            address: 'Hòa Minh, Liên Chiểu, Đà Nẵng',
            type: 1,
            fee: [],
            totalSlot: 10,
            description: 'abcdabcd',
        },
        {
            id: 7,
            nameCamera: 'Camera 7',
            lat: 16.07299,
            lng: 108.229914,
            address: 'Hòa Minh, Liên Chiểu, Đà Nẵng',
            type: 1,
            fee: [],
            totalSlot: 10,
            description: 'abcdabcd',
        },
        {
            id: 7,
            nameCamera: 'Camera 7',
            lat: 16.07286,
            lng: 108.229912,
            address: 'Hòa Minh, Liên Chiểu, Đà Nẵng',
            type: 1,
            fee: [],
            totalSlot: 10,
            description: 'abcdabcd',
        },
        {
            id: 7,
            nameCamera: 'Camera 7',
            lat: 16.07253,
            lng: 108.229989,
            address: 'Hòa Minh, Liên Chiểu, Đà Nẵng',
            type: 1,
            fee: [],
            totalSlot: 10,
            description: 'abcdabcd',
        },
        {
            id: 7,
            nameCamera: 'Camera 7',
            lat: 16.07274,
            lng: 108.2299789,
            address: 'Hòa Minh, Liên Chiểu, Đà Nẵng',
            type: 1,
            fee: [],
            totalSlot: 10,
            description: 'abcdabcd',
        },
    ]
    const handleMap = (e) => {
        let lat = e.latLng.lat()
        let lng = e.latLng.lng()
        if (props.isAddingParking) {
            props.addingParking(lat, lng)
        } else if (props.isEditingParking) {
            props.editingParking(lat, lng)
        }
    }
    return (
        <div className={classes.wrapGrid}>
            <div className={classes.listCamera}>
                {!props.showformadd ? (
                    <>
                        <Paper className={classes.listmenu}>
                            <Tabs
                                value={0}
                                indicatorColor="primary"
                                textColor="primary"
                                aria-label="simple tabs example"
                                className={classes.tablist}
                                variant="fullWidth"
                            >
                                <Tab className={classes.customTab} label="Danh Sách" />
                            </Tabs>
                        </Paper>

                        <div className={classes.listseach}>
                            <Seach />

                            <Scrollbars>
                                <Listitem />
                            </Scrollbars>
                        </div>

                        <div className={classes.listCard}>
                            <Tooltip title="Add" aria-label="add">
                                <Fab color="primary" className={classes.fab} onClick={(e) => showModal(e)}>
                                    <AddIcon />
                                </Fab>
                            </Tooltip>
                        </div>
                    </>
                ) : null}
                {props.showformadd ? (
                    <div className={classes.showform}>
                        <FormAddPage showModal={showModal} />{' '}
                    </div>
                ) : null}
            </div>
            <div className={classes.GoogleMap}>
                <GoogleMapControlled>
                    <GoogleMap center={{ lat: 16.07264, lng: 108.229916 }} zoom={13} onClick={(e) => handleMap(e)}>
                        {listCamera
                            ? listCamera.map((marker, index) => {
                                  return <MarkerParking marker={marker} key={index} id={marker.id} lat={marker.lat} lng={marker.lng} />
                              })
                            : null}
                        {!isEmpty(props.isAdding) && props.isAddingParking && <NewMarker lat={props.isAdding.lat} lng={props.isAdding.lng}></NewMarker>}
                        {!isEmpty(props.editFormData) && props.isEditingParking && (
                            <MarkerParking
                                lat={props.isEditing.lat}
                                lng={props.isEditing.lng}
                                id={props.editFormData.id}
                                marker={props.editFormData}
                            ></MarkerParking>
                        )}
                    </GoogleMap>
                </GoogleMapControlled>
            </div>
        </div>
    )
}

export default ManageParking

const useStyles = makeStyles((theme) => ({
    customTab: {
        width: '400px',
        background: '#ffffff',
    },
    tablist: {
        width: 400,
    },
    listCamera: {
        boxShadow: '-5px 5px 5px -5px #333;',
        position: 'relative',
        background: '#FFFFFF',
    },
    listseach: {
        height: 'calc(100vh - 167px)',
    },
    root: {
        width: '400px',
        zIndex: 3,
        boxShadow: '5px 0 5px -5px #333',
        height: '100%',
        position: 'relative',
    },
    showform: {
        display: 'flex',
        height: '100%',
    },
    paper: {
        color: theme.palette.text.secondary,
        height: '100%',
    },
    listCard: {
        right: '60px',
        position: 'absolute',
        bottom: '25px',
    },
    GoogleMap: {
        flex: '1 1 auto',
    },
    bground: {
        backgroundColor: '#e0e0e0',
    },
    customCard: {
        padding: 0,
        margin: '0 15px',
        '&:last-child': {
            padding: 0,
        },
    },
    size: {
        fontSize: 16,
    },
    sizeitem: {
        fontSize: '14px',
    },
    map: {
        height: '100%',
        position: 'relative',
    },
    wrapGrid: {
        display: 'flex',
        flex: '1 1 auto',
    },
    bground: {
        backgroundColor: '#e0e0e0',
    },
    blacklist: {
        marginTop: '3px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },

    fab: {
        position: 'absolute',
        bottom: 3,
    },
    iconeditbuton: {
        padding: '0',
    },
    icondeletebuton: {
        padding: '0',
    },
    listblck: {
        flexGrow: 1,
        zIndex: '9999',
        left: '101%',
        boxShadow: '5px 0 5px -5px #333',
        height: '100%',
        position: 'absolute',
        background: '#ffffff',
        top: '0',
    },
    link: {
        textDecoration: 'none',
    },
    setitem: {
        // marginLeft: '16px',
    },
    iconedit: {
        fontSize: '15px',
        padding: 0,
    },
    icondelete: {
        fontSize: '15px',
        padding: 0,
        // marginLeft: '8px',
    },
    color: {
        color: 'red',
    },
    formadd: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    setheight: {
        height: '100%',
    },
    scroll: {},
    closeButton: {
        position: 'absolute',
        right: theme.spacing(0),
        top: theme.spacing(0),
        color: theme.palette.grey[500],
    },

    siteMap: {
        display: 'flex',
        height: '100vh',
        width: '100%',
    },
    infoCamera: {
        width: 320,
        padding: 10,
    },
    title: {
        fontSize: 14,
        paddingLeft: '6px',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        justifyContent: 'flex-start',
    },
    media: {
        height: 70,
        width: 70,
    },
    textInfo: {
        marginLeft: 10,
    },
    tooltip: {
        marginRight: 5,
    },
    logtitle: {
        margin: '0',
        padding: '8px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    dialog: {
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
    },
    logblack: {
        fontSize: '1.25rem',
        fontFamily: 'Roboto, Helvetica, Arial, sanSerif',
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
        margin: '6px',
    },
    Form: {
        width: '500px',
        marginLeft: '500px',
        marginTop: '50px',
    },
}))
