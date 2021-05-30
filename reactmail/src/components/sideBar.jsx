import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/sideBar.css'
class SideBar extends Component {

    render() {
        return (
            <div className="sideBar" id="mySidebar">
                <Link to="/inbox/:id">  <a >Inbox</a></Link>                     
                <Link to="/spam/:id">  <a >Spam</a></Link>   
                <Link to="/sentitems/:id">  <a >SentItems</a></Link>   
                <Link to="/deleteditems/:id">  <a >DeletedItems</a></Link>   

            </div>
        );
    }
}

export default SideBar;