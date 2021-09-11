import { USER_RESET_PASSWORD_FAIL, USER_RESET_PASSWORD_REQUEST, USER_RESET_PASSWORD_SUCCESS } from "../constants/userConstants";

export const resetReducer = (state={}, action)=> {
    switch (action.type) {
        case USER_RESET_PASSWORD_REQUEST:
            return {loading:true}    
        case USER_RESET_PASSWORD_SUCCESS:
            return {loading:false, reset: action.payload}
        case USER_RESET_PASSWORD_FAIL:
            return {loading:false, error: action.payload}
        
        default:
            return state;
    }
}