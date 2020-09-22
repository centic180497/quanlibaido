import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Scrollbars } from 'react-custom-scrollbars'

import ItemParking from '../Itemcamera_parking'

function Listitem(props) {
    const classes = useStyles()
    const [listCamera] = useState([
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
    ])

    return (
        <div className={classes.cameras}>
            <h4 className={classes.title}>
                DANH SACH CAMERA (<span>8</span>)
            </h4>
            <div className={classes.boxScrollCard}>
                <Scrollbars>
                    <div className={classes.boxCameraItem}>
                        {listCamera.length > 0
                            ? listCamera.map((camera, index) => {
                                  return (
                                      <ItemParking
                                          camera={camera}
                                          key={index}
                                          showdata={props.showdata}
                                          itemcamera={props.itemcamera}
                                          showpopup={props.showpopup}
                                      />
                                  )
                              })
                            : null}
                    </div>
                </Scrollbars>
            </div>
        </div>
    )
}

export default Listitem

const useStyles = makeStyles((theme) => ({
    cameras: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    boxScrollCard: {
        height: '100vh',
    },
    title: {
        margin: 10,
    },
    boxCameraItem: {
        padding: '0 10px',
    },
}))
