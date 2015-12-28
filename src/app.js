/**
 * Created by diannedorris on 12/27/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactStormpath, { Router, LoginRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';

ReactStormpath.init();

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Route path='/' component={MasterPage}>
            <IndexRoute component={IndexPage} />
            <LoginRoute path='/login' component={LoginPage} />
            <LogoutRoute path='/logout' />
            <Route path='/registration' component={RegistrationPage} />
            <AuthenticatedRoute path='/profile' component={ProfilePage} />
        </Route>
    </Router>,
    document.getElementById('app-container')
);