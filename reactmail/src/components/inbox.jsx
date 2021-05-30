import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';


function Inbox(props) {
   const addDetailtoMailbox=(event)=>{
    props.dispatch({
            type:"MAILBOX",
            payload:event
        })
    }
    
    const listItems = props.inboxmail.map((data,index) =>
        <li key={index} className={`${data.unread ?"unread":" "} ${data.flag ? "flaged":" "}`}>
            <Link to={`/inbox/${index}`} onClick={()=>addDetailtoMailbox(data)}>  
                <h3 >{data.subject}</h3>
                <p>{data.content}</p>   
            </Link>
        </li>
  );
  
  return (
        <div>
           {listItems}
        </div>
    );
}

const mapStateToProp = (state) =>{
    return {
        inboxmail:state.mainReducers && state.mainReducers.inboxMail
	}
}
 const mapDispatchToProp = (dispatch) => {
 	return {dispatch}
 }

export default connect(mapStateToProp,mapDispatchToProp)(Inbox);