import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import theme from 'themes'
import store from 'stores/redux_store'
import Root from 'components/root'

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Route path="/" component={Root} />
                </Router>
            </ThemeProvider>
        </Provider>
    )
}

export default App
