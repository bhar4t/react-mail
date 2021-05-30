import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function DeletedItems(props) {
   const addDetailtoMailbox=(event)=>{
    props.dispatch({
            type:"MAILBOX",
            payload:event
        })
    }    
    const listItems = props.deletedMail.map((data,index) =>
        <li key={index}>
            <Link to={`/deleteditems/${index}`} onClick={()=>addDetailtoMailbox(data)}>  <h1 className={`${data.unread ?"unread":" "}`}>{data.subject}</h1>
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
        deletedMail:state.mainReducers && state.mainReducers.deletedMail
	}
}
 const mapDispatchToProp = (dispatch) => {
 	return {dispatch}
 }

export default connect(mapStateToProp,mapDispatchToProp)(DeletedItems);






