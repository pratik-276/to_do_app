import React, { Component } from 'react';
import M from  'materialize-css/dist/js/materialize.min.js';

class Header extends Component {
    componentDidMount(){
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }
    render(){
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="nav-wrapper indigo">
                        <div className="container">
                            <ul className="left">
                                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-med">
                                    <i className="material-icons">menu</i>
                                </a>
                                <a href="/" class="brand-logo">ToDo App</a>
                            </ul>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <a href="/todos">Todos</a>
                                </li>
                                <li>
                                    <a href="/tasks">Tasks</a>
                                </li>
                                <li>
                                    <a href="/completed">Completed Tasks</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul class="sidenav" id="slide-out">
                    <li>
                        <a href="/todos">Todos</a>
                    </li>
                    <li>
                        <a href="/tasks">Tasks</a>
                    </li>
                    <li>
                        <a href="/completed">Completed Tasks</a>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Header;