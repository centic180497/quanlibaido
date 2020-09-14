import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider } from '@material-ui/core'
import Notifications from '../notifications'
import UserInfo from '../user_info'

import logo from 'assets/images/logo.png'

function AdminNavbar() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.start}>
                <img src={logo} className={classes.logoImg} alt="centic.vn"/>
            </div>
            <Divider orientation="vertical" />
            <div className={classes.title}></div>
            <div className={classes.title}></div>
            <div className={classes.end}>
                <Notifications />
                <UserInfo />
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: theme.spacing(6),
        color: 'rgba(0,0,0,0.87)',
        background: theme.palette.common.white,
        padding: '0 8px',
    },
    start: {
        height: '100%',
    },
    logoImg: {
        height: '100%',
        padding: 10,
    },
    title: {},
    end: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
    },
}))

export default AdminNavbar
