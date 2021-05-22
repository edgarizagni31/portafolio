import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { Home } from './views/Home';
import { About } from './views/About';
import { Projects } from './views/Projects';
import { Navbar } from './views/Navbar';
import { Contact } from './views/Contact';

export const RouterApp = () => {
    return (
        <Router>
                <Navbar />
                <div className = 'container'>
                    <Switch>
                        <Route path = '/sobre-mi' component = { About } />
                        <Route path = '/proyectos' component = { Projects }/>
                        <Route path = '/contacto' component = { Contact } />
                        <Route path = '/' component = { Home } />
                        <Redirect to = '/' />
                    </Switch>      
                </div>
        </Router>  

    )
}
