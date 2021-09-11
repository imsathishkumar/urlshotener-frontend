import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { login } from '../userAction'
import './Login.css'

export const Login = () =>
{
    const history = useHistory();
    const dispatch = useDispatch()
    
    const user = useSelector((state) => state.userLogin)
    const {loading,error,userInfo} = user;
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    const name = JSON.parse(localStorage.getItem('userInfo'))
    var submitHandler = (e) => {
        e.preventDefault()
        
        dispatch(login(email,password))

        if(name){
            history.push('/home')
        }
    };

    var activeEstateList;
    
useEffect(()=>{
    function activeEstateList() {
        const item = localStorage.getItem('userInfo')
        
        if(item){
            history.push('/home')
        }
      }
      activeEstateList()

    },[loading]) 

  
    return (
        <>
        {
            loading ? <div class="spinner-border text-success" role="status" style={{fontSize:"50px"}}>
            <span class="sr-only">Loading...</span>
          </div> : <div className='container'>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <form autoComplete="off" onSubmit={submitHandler}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setemail(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setpassword(e.target.value)} />
                        </div>

                        <div class="col-md-4 mx-auto">
                        <button type="submit" class="btn btn-outline-danger " style={{borderRadius:"0px"}}>Login</button>
                        </div>
                        <div style={{display:"flex",justifyContent:'space-between'}}>
                        <Link to='/register'>
                        <p className='text-muted text-left'>New User ? Register</p>
                        </Link>
                        <Link to='/reset'>
                        <p className='text-muted text-right'>Forgot Password ?</p>
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        }
        
    </>
    )
}
