import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from '../views/login'
import RegisterUser from '../views/registerUser'

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro-usuario" component={RegisterUser}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas
