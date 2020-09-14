import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider } from '@material-ui/core'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import AdminNavbar from './admin_navbar'
import AdminSidebar from './admin_sidebar'
import ManageNoParking from './manage_no_parking'
import ManageParking from './manage_parking'

function AdminConsole() {
    const classes = useStyles()
    
    const match = useRouteMatch()
    
    return (
        <div id="admin_view" className={classes.root}>
            <AdminNavbar />
            <div className={classes.bottom}>
                <AdminSidebar />
                <Divider orientation="vertical" />
                <div className={classes.adminConsole}>
                    <Switch>
                        <Route path={`${match.path}/manage_no_parking`} component={ManageNoParking} />
                        <Route path={`${match.path}/manage_parking`} component={ManageParking} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1 1 auto',
        fontSize: 14,
        position: 'relative',
        '&:before': {
            content: "''",
            position: 'absolute',
            display: 'block',
            top: -1,
            left: 0,
            right: 0,
            height: 1,
            boxShadow: '0 1px 0 rgba(6,6,7,0.1),0 1.5px 0 rgba(6,6,7,0.025),0 2px 0 rgba(6,6,7,0.025)',
            zIndex: 1,
        },
    },
    adminConsole: {
        display: 'flex',
        flex: '1 1 auto',
    },
}))

export default AdminConsole
