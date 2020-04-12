import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from '../views/login'
import RegisterUser from '../views/registerUser'
import Home from '../views/home'
import RevenueExpenses from '../views/revenue-expenses'

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/cadastro-usuario" component={RegisterUser} />
                <Route path="/comissoes-despesas" component={RevenueExpenses} />
            </Switch>
        </HashRouter>
    )
}

export default Routes
