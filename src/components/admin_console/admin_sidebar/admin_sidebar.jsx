import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { indigo, grey } from '@material-ui/core/colors'
import { MapOutlined as MapOutlinedIcon, SettingsOutlined as SettingsIcon, Videocam as VideocamIcon } from '@material-ui/icons'
import { List, ListItem, Tooltip, Button, Menu, Typography } from '@material-ui/core'
import { Scrollbars } from 'react-custom-scrollbars'

import { ScrollbarStyle } from 'utils/styles'
import NavLink from 'components/custom_router_link'

function AdminSidebar() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const match = useRouteMatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.top}>
                <Scrollbars style={ScrollbarStyle}>
                    <List>
                        <ListItem className={classes.listItem}>
                            <Tooltip title="Bản đồ bãi đỗ" arrow placement="right">
                                <Button activeClassName={classes.buttonActive} className={classes.button} component={NavLink} to={`${match.path}/parking`}>
                                    <div className={classes.iconWrapper}>
                                        <MapOutlinedIcon className={classes.icon} />
                                    </div>
                                </Button>
                            </Tooltip>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Tooltip title="Vi phạm" arrow placement="right">
                                <Button activeClassName={classes.buttonActive} className={classes.button} component={NavLink} to={`${match.path}/violations`}>
                                    <div className={classes.iconWrapper}>
                                        <MapOutlinedIcon className={classes.icon} />
                                    </div>
                                </Button>
                            </Tooltip>
                        </ListItem>
                    </List>
                </Scrollbars>
            </div>
            <div className={classes.bottom}>
                <List>
                    <ListItem className={classes.listItem}>
                        <Tooltip title="Cài đặt" placement="right" arrow>
                            <Button className={classes.button} onClick={handleClick}>
                                <div className={classes.iconWrapper}>
                                    <SettingsIcon className={classes.icon} />
                                </div>
                            </Button>
                        </Tooltip>
                    </ListItem>
                </List>
                <Menu
                    id="settings-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <div className={classes.settingsMenu}>
                        <Button
                            className={classes.settingsButton}
                            activeClassName={classes.buttonActive}
                            component={NavLink}
                            to={`${match.path}/manage_cameras`}
                        >
                            <div className={classes.settingsIconWrapper}>
                                <VideocamIcon className={classes.icon} />
                            </div>
                            <Typography className={classes.settingsText}>Quản lý camera</Typography>
                        </Button>
                        <Button
                            className={classes.settingsButton}
                            activeClassName={classes.buttonActive}
                            component={NavLink}
                            to={`${match.path}/manage_parking`}
                        >
                            <div className={classes.settingsIconWrapper}>
                                <SettingsIcon className={classes.icon} />
                            </div>
                            <Typography className={classes.settingsText}>Quản lý bãi đỗ</Typography>
                        </Button>
                        <Button
                            className={classes.settingsButton}
                            activeClassName={classes.buttonActive}
                            component={NavLink}
                            to={`${match.path}/manage_no_parking`}
                        >
                            <div className={classes.settingsIconWrapper}>
                                <SettingsIcon className={classes.icon} />
                            </div>
                            <Typography className={classes.settingsText}>Quản lý cấm đỗ</Typography>
                        </Button>
                    </div>
                </Menu>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 60,
        background: theme.palette.common.white,
    },
    top: {
        display: 'flex',
        flex: '1 1 auto',
    },
    listItem: {
        padding: '2px 4px',
    },
    button: {
        position: 'relative',
        width: '100%',
        minWidth: '100%',
        height: '100%',
        justifyContent: 'center',
        padding: '10px 12px',
        '&:hover': {
            background: grey[300],
        },
    },
    buttonActive: {
        color: indigo[700],
        background: grey[300],
        '&:before': {
            content: "''",
            position: 'absolute',
            width: 4,
            background: indigo[700],
            top: 0,
            left: 0,
            bottom: 0,
            height: '100%',
            borderRadius: 4,
        },
    },
    iconWrapper: {
        height: 24,
        width: 24,
    },
    icon: {
        fontSize: 24,
    },
    settingsMenu: {
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
    },
    settingsButton: {
        textTransform: 'none',
        padding: '10px 12px',
        justifyContent: 'flex-start',
        marginBottom: 4,
        '&:hover': {
            background: grey[300],
        },
        position: 'relative',
    },
    settingsIconWrapper: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
    },
    settingsText: {
        fontSize: 16,
        fontWeight: 600,
    },
}))

export default AdminSidebar
