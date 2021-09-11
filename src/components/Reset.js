import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {  reset } from '../userAction'
import './Login.css'

export const Reset = () =>
{
    const dispatch = useDispatch()
    const history = useHistory();
    

    const [email, setemail] = useState('')
  

    const submitHandler = (e) => {
        e.preventDefault()
        
        dispatch(reset(email))
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <form autoComplete="off" onSubmit={submitHandler}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setemail(e.target.value)}/>
                        </div>
                       
                        
                        <div class="col-md-4 mx-auto">
                        <button type="submit" class="btn btn-outline-primary ">Send Mail</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
