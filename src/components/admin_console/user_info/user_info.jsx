import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Button, Typography, Menu } from '@material-ui/core'
import { AccountBox as AccountIcon, ExitToApp as LogoutIcon } from '@material-ui/icons'

function UserInfo() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Button className={classes.button} onClick={handleClick}>
                <Avatar />
                <Typography className={classes.text}>admin</Typography>
            </Button>
            <Menu
                id="user-info"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div className={classes.list}>
                    <Button className={classes.menuButton}>
                        <div className={classes.iconWrapper}>
                            <AccountIcon className={classes.icon} />
                        </div>
                        <Typography className={classes.menuText}>Thông tin tài khoản</Typography>
                    </Button>
                    <Button className={classes.menuButton}>
                        <div className={classes.iconWrapper}>
                            <LogoutIcon className={classes.icon} />
                        </div>
                        <Typography className={classes.menuText}>Đăng xuất</Typography>
                    </Button>
                </div>
            </Menu>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        textTransform: 'none',
    },
    text: {
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 8,
    },
    list: {
        paddingLeft: 8,
        paddingRight: 8,
        display: 'flex',
        flexDirection: 'column',
    },
    menuButton: {
        marginBottom: 4,
        textTransform: 'none',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    icon: {
        fontSize: 24,
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 8,
    },
    menuText: {
        fontSize: 14,
        fontWeight: 600,
    },
}))

export default UserInfo
