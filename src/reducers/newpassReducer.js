import { USER_NEW_PASSWORD_FAIL, USER_NEW_PASSWORD_REQUEST, USER_NEW_PASSWORD_SUCCESS } from "../constants/userConstants";

export const newpassReducer = (state={}, action)=> {
    switch (action.type) {
        case USER_NEW_PASSWORD_REQUEST:
            return {loading:true}    
        case USER_NEW_PASSWORD_SUCCESS:
            return {loading:false, newpassword: action.payload}
        case USER_NEW_PASSWORD_FAIL:
            return {loading:false, error: action.payload}
        
        default:
            return state;
    }
}