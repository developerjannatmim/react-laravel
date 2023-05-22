/*eslint-disable*/
import React, { useState } from 'react'
import http from '../http';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(values => ({...values,[e.target.name]: e.target.value}))
  }

  const handleClick = () => {
    //console.log(value);
    http.post('users', value)
    .then((res)=>{
      navigate("/");
    })
  }

  return (
    <div>
      <h2>New User</h2>
      <div className='row'>
       <div className='col-sm-6 justify-content-center'>
       <div className='card p-4'>
       <label>Name</label>
       <input type='text' name='name' value={value.name} onChange={handleChange} className='form-control mb-2'/>

       <label>Email</label>
       <input type='email' name='email' value={value.email} onChange={handleChange} className='form-control mb-2'/>

       <label>Password</label>
       <input type='password' name='password' value={value.password} onChange={handleChange} className='form-control mb-2'/>

       <button type='submit' onClick={handleClick} className='btn btn-info mt-2'>Create</button>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Create