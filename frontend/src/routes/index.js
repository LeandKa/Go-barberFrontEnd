import React from 'react';
import { Router, Switch } from 'react-router-dom';
import WrapperRouter from './WrapperRouter';
import CreateUser from '~/pages/CreateUser';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Perfil from '~/pages/Perfil';
import Reset from '~/pages/Reset';
import history from '~/services/history';
import ForgetPassword from '~/pages/ForgetPassword';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <WrapperRouter exact path="/" component={Login} />
                <WrapperRouter
                    isPrivate
                    exact
                    path="/dashboard"
                    component={Home}
                />
                <WrapperRouter
                    isPrivate
                    exact
                    path="/perfil"
                    component={Perfil}
                />
                <WrapperRouter
                    exact
                    path="/forget-password"
                    component={ForgetPassword}
                />
                <WrapperRouter
                    exact
                    path="/novo-usuario"
                    component={CreateUser}
                />
                <WrapperRouter exact path="/reset" component={Reset} />
            </Switch>
        </Router>
    );
}
