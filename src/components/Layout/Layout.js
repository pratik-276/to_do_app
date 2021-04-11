import React from 'react';
import Header from '../Header/Header';

import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';

const Layout = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}
 
export default Layout;