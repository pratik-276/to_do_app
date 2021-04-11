import React from 'react';
import Header from '../Header/Header';

import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Todos from '../../containers/Todos/Todos';

const Layout = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/todos" component={Todos} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}
 
export default Layout;