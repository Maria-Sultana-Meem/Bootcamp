import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user = useLoaderData()
    const handleUpdate =(e)=>{
  e.preventDefault()
   e.preventDefault()
  const name = e.target.name.value
  const email = e.target.email.value

  const updateUser ={name,email}
  fetch(`http://localhost:3000/users/${user._id}`,{
  method:'PATCH',
   headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(updateUser)
})
.then(res=>res.json())
.then(data=>{
  console.log('after update',data);
if (data.modifiedCount) {
    alert('updated')
}
  
  
  
})


    }
    return (
        <div>
           
             <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1>Update a user</h1>
          <form onSubmit={handleUpdate}>
         <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' defaultValue={user.name} />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' defaultValue={user.email}/>
        
          <button className="btn btn-neutral mt-4">Add User</button>
        </fieldset>
       </form>
      </div>
      
    </div>
        </div>
    );
};

export default UpdateUser;