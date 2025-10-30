import React, { use, useState } from 'react';
import { Link } from 'react-router';

const Users = ({userPromise}) => {
 const fetchdata = use(userPromise)
 const [users,setUsers]= useState(fetchdata)
  const handleAddUser =(e)=>{
  e.preventDefault()
  const name = e.target.name.value
  const email = e.target.email.value

  const newUser ={name,email}
 
  
  fetch('http://localhost:3000/users',{
    method:"POST",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(newUser)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log('after saving user', data);
    if (data.insertedId){
       newUser._id=data.insertedId
       const newUsers=[...users,data]
       setUsers(newUsers)
        alert("user added succesfully")
        e.target.reset()
    }
    
  })
  }
  const handleDelete=(id)=>{

fetch(`http://localhost:3000/users/${id}`,{
  method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
  console.log('after delete',data);
  if (data.deletedCount) {
    alert('succesfully deleted')
    const remaining = users.filter(user=>user._id !==id)
    setUsers(remaining)
  }
  
})


  }

    return (<>
         <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1>{users.length}</h1>
       <form onSubmit={handleAddUser}>
         <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email'/>
        
          <button className="btn btn-neutral mt-4">Add User</button>
        </fieldset>
       </form>
      </div>
      
    </div>
      {
        users.map(user=><div key={user._id}>
           <p>{user.name}:{user.email}
             <Link className='text-blue-500 btn btn-xs' to={`/users/${user._id}`}>Details</Link>
             <Link className='text-pink-500 btn btn-xs' to={`/update/${user._id}`}>Edit</Link>
            <button onClick={()=>handleDelete(user._id)} className='btn bg-red-500'>X</button></p>
          

        </div>)
      }
    </>
    );
};

export default Users;