import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom'
import Inbox from './inbox'
import Spam from './spam'
import SentItems from './sentItems'
import DeletedItems from './deletedItems'
import MailBox from './commonComponent/mailBox';
import '../css/mailTab.css'
class MailTab extends Component {
    render() {
        return (
            <div className="mailTab">   
                   <Switch>
                       <Route path="/inbox/:id" exact component={Inbox} />
                       <Route path="/spam/:id" exact component={Spam} />
                       <Route path="/sentitems/:id" exact component={SentItems} />
                       <Route path="/deleteditems/:id" exact component={DeletedItems} />
                   </Switch>
                   <div className="mailBox">
                       <MailBox />
                   </div>
            </div>
        );
    }
}

export default MailTab;