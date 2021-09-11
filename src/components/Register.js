import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { register } from '../userAction'
import './Login.css'

export const Register = () =>
{
    const history = useHistory();
    const dispatch = useDispatch()
    
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register(name,email,password))
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <form autoComplete="off" onSubmit={submitHandler}>
                    <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>setname(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setemail(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setpassword(e.target.value)} />
                        </div>
                        <div class="col-md-4 mx-auto">
                        <button type="submit" class="btn btn-primary " style={{borderRadius:"0px"}}>Register</button>
                        </div>
                        <div style={{display:"flex",justifyContent:'flex-end'}}>
                        <Link to='/'>
                        <p className='text-muted text-right'>Login</p>
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
