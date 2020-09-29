import React, { useEffect } from 'react'
import { Tooltip, Paper, Tabs, Tab, Fab } from '@material-ui/core'
import { Scrollbars } from 'react-custom-scrollbars'
import { Add as AddIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import Seach from './component/seach_parking/seach_parking'
import Listitem from './component/listitem_paking'
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
    useEffect(() => {
        props.fetchManageParking()
        props.fetchProvinces()
    }, [])
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
                            <Tooltip title="Thêm" aria-label="add">
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
                    <GoogleMap center={{ lat:parseFloat(16.07264), lng:parseFloat(108.229916) }} zoom={props.zoom} onClick={(e) => handleMap(e)}>
                        {listCamera
                            ? listCamera.map((marker, index) => {
                                  if (marker.id === props.idEditForm && props.isEditingParking) return null

                                  return <MarkerParking marker={marker} key={index} id={marker.id} lat={marker.lat} lng={marker.lng} />
                              })
                            : null}
                        {!isEmpty(props.isAdding) && props.isAddingParking ? <NewMarker lat={props.isAdding.lat} lng={props.isAdding.lng}></NewMarker> : null}
                        {props.isEditingParking && props.idEditForm !== -1 && (
                            <MarkerParking
                                lat={props.editFormData.lat}
                                lng={props.editFormData.lng}
                                id={props.idEditForm}
                                marker={{ ...props.editFormData }}
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
    listCard: {
        right: '70px',
        position: 'absolute',
        bottom: '5px',
    },
    tablist: {
        width: 400,
    },
    listCamera: {
        boxShadow: '-5px 5px 5px -5px #333;',
        position: 'relative',
        background: '#FFFFFF',
        maxHeight: '100%',
        overflow: 'hidden',
        width: '400px',
    },
    listseach: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    fab: {
        position: 'absolute',
        bottom: 3,
    },
    showform: {
        display: 'flex',
        height: '100%',
    },
    GoogleMap: {
        flex: '1 1 auto',
    },
    wrapGrid: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    //fix css
}))
