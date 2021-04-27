import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Dashboard } from '../pages/dashboard';
import { Favorites } from '../pages/favorites';
import { Login } from '../pages/login';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/favorites" component={Favorites}/>
            </Switch>
        </BrowserRouter>
    );
}