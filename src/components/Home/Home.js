import React from 'react';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className="container valign-wrapper" style={{width: "90%", minHeight: "80vh"}}>
            <div className="row">
                <div className="col s12 m5 l6">
                    <h1 className={classes.headerText}>Manage your daily tasks more effectively</h1>
                </div>
                <div className="col s12 m7 l6">
                    <img src="/tasks.svg" alt="tasksListSVG" className="responsive-img" />
                </div>
            </div>
        </div>
    );
}
 
export default Home;