import React from 'react';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div class="container valign-wrapper" style={{width: "90%", minHeight: "80vh"}}>
            <div class="row">
                <div class="col s12 m5 l6">
                    <h1 className={classes.headerText}>Manage your daily tasks more effectively</h1>
                </div>
                <div class="col s12 m7 l6">
                    <img alt="tasksListSVG" src="/tasks.svg" width="100%" />
                </div>
            </div>
        </div>
    );
}
 
export default Home;