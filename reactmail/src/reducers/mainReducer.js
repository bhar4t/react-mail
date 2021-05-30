import {inboxMail,spamMail} from '../data'
export const initialState = {
    inboxMail:inboxMail,
    spamMail:spamMail,
    mailBox:{},
    deletedMail:[],
}

const mainReducers = (state = initialState, action) => {
    switch (action.type) {

        case "MAILBOX":
            return{
                ...state,
                mailBox:action.payload
            }
        case "READMAIL":{
            const upDatedMail  = state.inboxMail.map((data,index) => {
                if (data.mId == action.index) {
                    data.unread = false  ;
                   
                }
                return data;
            })
            return {
                ...state,
                inboxMail: upDatedMail
            }
        }
        case "DELETEMAIL":{
            const deletedMail= action.payload 
            deletedMail.deleted=true
            const obj = state.inboxMail.filter(data => data.mId != deletedMail.mId);
            return {
               ...state,
               inboxMail:obj,
               deletedMail:[...state.deletedMail, deletedMail]
            }
        }
        case "FLAGMESSAGE":{
            const upDatedMail  = state.inboxMail.map((data,index) => {
                if (data.mId == action.payload.mId) {
                    data.flag=true
                   
                }
                return data;
            })
            const mailBox=action.payload
            mailBox.flag=true
            return {
                ...state,
                inboxMail: upDatedMail,
                mailBox:mailBox,
            }
        }

        case "UNFLAGMESSAGE":{
            const upDatedMail  = state.inboxMail.map((data,index) => {
                if (data.mId == action.payload.mId) {
                    data.flag=false 
                   
                }
                return data;
            })
            const mailBox=action.payload
            mailBox.flag=false
            return {
                ...state,
                inboxMail: upDatedMail,
                mailBox:mailBox,
            }
        }

        default:
            return {
                ...state
            }
    }

}
export default mainReducers