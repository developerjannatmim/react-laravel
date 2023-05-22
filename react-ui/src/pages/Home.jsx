/*eslint-disable*/ 
import React, { useEffect, useState } from 'react'
import http from '../http';
import { Link, useNavigate  } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }

    const handleDelete = (id) => {
        http.delete('/users/'+id).then(res=>{
            fetchAllUsers();
        })      
    };

    
  return (
    <div>
        <h2>Users List</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Sno.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) =>{
                    const { id, name, email } = user;
                    return(
                    <tr key={id}>
                   <td>{id}</td> 
                   <td>{name}</td> 
                   <td>{email}</td>
                   <td>
                    <Link to={"/edit/"+id}><button type='button' style={{marginRight: "10px"}} className='btn btn-outline-info'>Edit</button></Link>
                    <Link to={"/view/"+id}><button type='button' style={{marginRight: "10px"}} className='btn btn-outline-primary'>View</button></Link>
                    <button type='button' onClick={() => handleDelete(id)} className='btn btn-outline-danger'>Delete</button>
                    </td> 
                </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home