import React,{Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header'
import SideBar from './components/sideBar'
import MailTab from './components/mailTab'
import MailBox from './components/commonComponent/mailBox';

function App() {
  return (
  <Fragment>
    <Router>
    <Header/>
    <SideBar/>
    <MailTab/>
    <MailBox/>
    </Router>
  </Fragment>
  );
}

export default App;
