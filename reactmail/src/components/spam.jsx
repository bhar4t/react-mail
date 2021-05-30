import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function Spam(props) {
  const addDetailtoMailbox=(event)=>{
    props.dispatch({
            type:"MAILBOX",
            payload:event
        })
    } 
  const listItems = props.spammail.map((data,index) =>
    <li key={index}>
     <Link to={`/spam/${index}`} onClick={()=>addDetailtoMailbox(data)}>  <h1>{data.subject}</h1>
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
        spammail:state.mainReducers && state.mainReducers.spamMail
	}
}
 const mapDispatchToProp = (dispatch) => {
 	return {dispatch}
 }

export default connect(mapStateToProp,mapDispatchToProp)(Spam);
