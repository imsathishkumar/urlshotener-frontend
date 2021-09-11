import React, { useState } from 'react'
import { useEffect } from 'react'
import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
const URL = 'https://urlshortauth.herokuapp.com'

export const Home = () =>
{const history = useHistory();

    const name = JSON.parse(localStorage.getItem('userInfo'))
    const admin = name?.name;
    const [url, setUrl] = useState('')
    const [datas, setDatas] = useState([])

    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        history.push('/')

    }

    const dataStore = (data) =>
    {
        return setDatas(data)
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        await axios.post(`${URL}/api/url`, {
            longUrl: url
        })
            .then((res) =>
            {
                console.log(res)
            })
            .catch((err) =>
            {
                console.log(err)
            })

        setUrl('')
    }

    useEffect(async () =>
    {
        await axios.get(`${URL}/api/get`)
            .then((res) =>
            {
                console.log(res.data.data, "PATH")
                dataStore(res.data.data)
                console.log(datas)

            })
            .catch((err) =>
            {
                console.log(err)
            })

    }, [url])

    return (<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <span>
                    <img src='https://www.codester.com/static/uploads/items/000/014/14289/icon.png' id='logo'></img>
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav  ml-auto">

                    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {admin}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="btn btn-light" onClick={logout}>Logout</a>
        </div>
      </li>
                </ul>
            </div>
        </nav>
        <div className='container' id='form'>
            <div className='row'>
                <div className='col-md-10 col-sm-10 mx-auto mt-4'>
                    <div className='card p-3'>
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <input type="text"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    name='url'
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-outline-primary mt-4" style={{borderRadius:"0px"}}>Generate Url</button>
                            </div>
                        </form>
                    </div>
                </div>

                {
                    datas.map((data) =>
                    {
                        return (

                            <div className='col-md-4 mx-auto mt-4'>
                                {<div class="card bg-light mb-3">
                                    <div class="card-header">Shortened Url </div>

                                    <div class="card-body">
                                        <h5 class="card-title"><a href={data.longUrl} target='_blank'>{data.shortUrl}</a></h5>
                                        <p class="card-text">{data.longUrl}</p>
                                    </div>
                                </div>}
                            </div>

                        )
                    })

                }
            </div>
        </div>
    </>)
}
