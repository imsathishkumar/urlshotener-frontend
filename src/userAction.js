import axios from "axios"


import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_NEW_PASSWORD_FAIL, USER_NEW_PASSWORD_REQUEST, USER_NEW_PASSWORD_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_RESET_PASSWORD_FAIL, USER_RESET_PASSWORD_REQUEST, USER_RESET_PASSWORD_SUCCESS } from "./constants/userConstants"

const URL = 'https://urlshortauth.herokuapp.com';



export const login = (email, password) => async (dispatch) =>
{

    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`${URL}/apis/login`, { email, password }, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
   
    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error
        })

    }
}


export const register = (name,email,password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const { data } = await axios.post(`${URL}/apis/register`, {name,email,password}, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error
        })
    }
}

export const reset = (email) => async (dispatch) => {

    try {
        dispatch({
            type: USER_RESET_PASSWORD_REQUEST
        })

        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const { data } = await axios.post(`${URL}/apis/reset`, {email}, config)

        dispatch({
            type: USER_RESET_PASSWORD_SUCCESS,
            payload: data
        })

     

    } catch (error) {
        dispatch({
            type: USER_RESET_PASSWORD_FAIL,
            payload: error
        })
    }
}


export const newpass = (password,token) => async (dispatch) => {

    try {
        dispatch({
            type: USER_NEW_PASSWORD_REQUEST
        })

        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const { data } = await axios.post(`${URL}/apis/newpassword`, {password,token}, config)

        dispatch({
            type: USER_NEW_PASSWORD_SUCCESS,
            payload: data
        })

     

    } catch (error) {
        dispatch({
            type: USER_NEW_PASSWORD_FAIL,
            payload: error
        })
    }
}