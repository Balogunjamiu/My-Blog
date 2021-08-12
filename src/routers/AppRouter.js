import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import DashBoardPage from '../components/DashBoardPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotfoundPage';
import AddPostPage from '../components/AddPostPage'
import PrivateRoute from './privateRoute'
//import PublicRoute from './privateRoute'

export const history = createBrowserHistory();

const AppRouter = ()=>(
    <Router history={history}>
    <div>

    <Switch>
        <Route path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={DashBoardPage} />
        <PrivateRoute path="/create" component={AddPostPage}/>
        {/* <PrivateRoute path="/edit/:id" component={EditPostPage}/> */}
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </Router>
    )
    export default AppRouter;