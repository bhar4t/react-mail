import React, { Component } from 'react';
import '../css/header.css';
import Menu from '../images/menu.png'
class Header extends Component {
    render() {
        return (
        <div className="header">
            <div className="siteArea">
                <a href="#"><img src={Menu} alt="" /></a>
                <a href="#">Outlook Mail</a>
                <a href="#">Chat</a>
            </div>
        </div>

        );
    }
}

export default Header;