import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

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
                        <div className="container" style={{minWidth: "85%"}}>
                            <ul className="left">
                                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-med">
                                    <i className="material-icons">menu</i>
                                </a>
                                <a href="/" className="brand-logo">ToDo App</a>
                            </ul>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/habits">Habits</a>
                                </li>
                                <li>
                                    <a href="/tasks">Tasks</a>
                                </li>
                                <li>
                                    <a href="/complete">Completed Tasks</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="slide-out">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/habits">Habits</a>
                    </li>
                    <li>
                        <a href="/tasks">Tasks</a>
                    </li>
                    <li>
                        <a href="/complete">Completed Tasks</a>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Header;