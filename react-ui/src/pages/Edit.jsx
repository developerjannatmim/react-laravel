/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import http from '../http';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const [value, setValue] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=> {
    fetchUser()
  }, []);

  const fetchUser = () => {
    http.get('/users/'+id+'/edit')
    .then((res) =>{
      setValue({
        name:res.data.name,
        email:res.data.email,
      });
    });
  }

  const handleChange = (e) => {
    setValue(values => ({...values,[e.target.name]: e.target.value}))
  }

  const handleClick = () => {
    //console.log(value);
    http.put('users/'+id, value)
    .then((res)=>{
      navigate("/");
    })
  }

  return (
    <div>
      <h2>Add User</h2>
      <div className='row'>
       <div className='col-sm-6 justify-content-center'>
       <div className='card p-4'>
       <label>Name</label>
       <input type='text' name='name' value={value.name} onChange={handleChange} className='form-control mb-2'/>

       <label>Email</label>
       <input type='email' name='email' value={value.email} onChange={handleChange} className='form-control mb-2'/>

       <label>Password</label>
       <input type='password' name='password' value={value.password} onChange={handleChange} className='form-control mb-2'/>

       <button type='submit' onClick={handleClick} className='btn btn-info mt-2'>Update</button>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Edit