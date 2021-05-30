import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../../css/mailBox.css'
class MailBox extends Component {
   constructor(props){
       super(props);
       this.state={
           mailbox:null,
           flag:false
       }

   }
   UNSAFE_componentWillReceiveProps(newProps){
    if(newProps.mailbox){
        this.setState({mailbox:newProps.mailbox},()=>{this.props.dispatch({type:"READMAIL",index:newProps.mailbox.mId})})

    }
    if(newProps.mailbox && newProps.mailbox.flag){
        this.setState({flag:true})
    }
    else{
        this.setState({flag:false})
    }
   }

   deletemail(event){
        this.props.dispatch({
            type:"DELETEMAIL",
            payload:event
        })
   }
   flagMessage(event){
       this.props.dispatch({
        type:"FLAGMESSAGE",
        payload:event
       })
   }
   unflagMessage(event){
    this.props.dispatch({
     type:"UNFLAGMESSAGE",
     payload:event
    })
    this.setState({flag:true})
}
    render() {
        return (
            <div className="mailBox">
              
                {this.state.mailbox &&
                    <> 
                        <h3> {this.state.mailbox &&this.state.mailbox.subject}</h3>
                        <p>{this.state.mailbox &&this.state.mailbox.content } </p>
                       {(!(this.state.mailbox && this.state.mailbox.deleted)) && 
                        <>
                            <button  className="delete" onClick={()=>this.deletemail(this.state.mailbox)}> Delete Mail</button>&nbsp;
                            {(!this.state.flag) && <button className="flag" onClick={()=>this.flagMessage(this.state.mailbox)}>Flag This Conversation</button>}
                            {(this.state.flag) && <button className="flag"  onClick={()=>this.unflagMessage(this.state.mailbox)}>Un Flag This Conversation</button>}
                        </>
                        }
                     </> 
                }
            </div>
        );
    }
}
const mapStateToProp = (state) =>{
    return {
      mailbox:state.mainReducers && state.mainReducers.mailBox
    }
}

const mapDispatchToProp = (dispatch) => {
    return {dispatch}
}

export default connect(mapStateToProp,mapDispatchToProp)(MailBox);
