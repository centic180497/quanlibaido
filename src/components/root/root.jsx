import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const ErrorPage = React.lazy(() => import('components/error_page'))
const Login = React.lazy(() => import('components/login'))
const AdminConsole = React.lazy(() => import('components/admin_console'))

function Root() {
    return (
        <Suspense fallback={'Loading'}>
            <Switch>
                <Route path={'/error'} component={ErrorPage} />
                <Route path={'/login'} component={Login} />
                <Route path={'/admin'} component={AdminConsole} />
                <Redirect
                    to={{
                        pathname: '/login',
                    }}
                />
            </Switch>
        </Suspense>
    )
}

export default Root
