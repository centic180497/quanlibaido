import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Notifications as NotificationsIcon } from '@material-ui/icons'
import { IconButton, Tooltip } from '@material-ui/core'

function Notifications() {
    // const [anchorEl, setAnchorEl] = React.useState(null)
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Tooltip title="Thông báo" placeholder="right" arrow>
                <IconButton>
                    <NotificationsIcon className={classes.icon} />
                </IconButton>
            </Tooltip>

        </div>
    )
}

const useStyles = makeStyles((styles) => ({
    root: {},
    iconButton: {},
    icon: {
        fontSize: 24,
        color: 'rgba(0,0,0,0.87)',
    },
    
}))

export default Notifications
