import React from 'react';
import Header from '../Header/Header';

import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Habits from '../../containers/Habits/Habits';

const Layout = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/habits" component={Habits} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}
 
export default Layout;