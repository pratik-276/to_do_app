import React from 'react';
import Header from '../Header/Header';

import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Habits from '../../containers/Habits/Habits';
import Tasks from '../../containers/Tasks/Tasks';
import Completed from '../../containers/Completed/Completed';

const Layout = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/habits" component={Habits} />
                <Route path="/tasks" component={Tasks} />
                <Route path="/complete" component={Completed} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}
 
export default Layout;