/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import http from '../http';
import { useParams } from 'react-router-dom';

const View = () => {
  const [value, setValue] = useState({});
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

  return (
    <div>
      <h1>Add User</h1>
      <div className='card p-4'>
        <h2>Name</h2>
        <p>{value.name}</p>
        <h2>Email</h2>
        <p>{value.email}</p>
      </div>
      </div>
  )
}

export default View