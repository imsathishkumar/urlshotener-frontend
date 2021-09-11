import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { Link, useHistory,useParams } from 'react-router-dom';
import {  newpass } from '../userAction'
import './Login.css'

export const NewPassword = () =>
{
    const history = useHistory();
    const dispatch = useDispatch()
    const { token } = useParams()
    console.log(token)
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        
        dispatch(newpass(password,token))
       
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <form autoComplete="off" onSubmit={submitHandler}>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setpassword(e.target.value)} />
                        </div>
        
                        <div class="col-md-4 mx-auto">
                        <button type="submit" class="btn btn-outline-primary ">Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
