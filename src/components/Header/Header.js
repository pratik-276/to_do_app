import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import $ from 'jquery';

class Header extends Component {
    componentDidMount(){
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
        // $(document).ready(function () {
        //     $('.button-collapse').sideNav({
        //         menuWidth: 300,
        //         edge: "left",
        //         closeOnClick: false,
        //         draggable: true,
        //         onOpen: () => console.log('OPEN'),
        //         opClose: () => console.log("CLOSE")
        //     });
        // }
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
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view indigo lighten-1 darken-4">
                            <a href="#!">
                                <img className="circle" src="/img5.jpg" />
                            </a>
                            <a href="#!">
                                <span className="white-text name">Pratik Mukherjee(Admin)</span>
                            </a>
                            <a href="#!">
                                <span className="white-text email">pratikmukherjee32@gmail.com</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a href="/"><i className="material-icons">dashboard</i>Home</a>
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
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li>
                        <a className="subheader">Account Info</a>
                    </li>
                    <li>
                        <a className="waves-effect" href="#!">Logout</a>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Header;