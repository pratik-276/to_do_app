import React from 'react';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className="container valign-wrapper" style={{width: "90%", minHeight: "80vh"}}>
            <div className="row">
                <div className="col s12 m5 l5">
                    <h1 className={classes.headerText}>Manage your daily tasks more effectively</h1>
                </div>
                <div className="col s12 m7 l6 offset-l1">
                    <img src="/tasks.svg" className="responsive-img" alt="tasksListSVG" />
                </div>
            </div>
        </div>
    );
}
 
export default Home;