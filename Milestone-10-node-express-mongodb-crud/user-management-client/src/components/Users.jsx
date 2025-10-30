import React, { use, useState } from 'react';



const Users = ({userPromise}) => {
    const initialUsers = use(userPromise)
    const [users,setUsers] = useState(initialUsers)
   
    
     const handleAddUser =(e)=>{
     e.preventDefault()
         const name = e.target.name.value
         const email = e.target.email.value
         const newUser = {name,email}
         fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
         })
         .then(res=>res.json())
         .then(data=>{
            console.log('after post',data);
            const newUsers = [...users,data]
            setUsers(newUsers)
            e.target.reset()
            
         })

     }

    return (
        <div>
            <div>
                <h1>Add Users</h1>
                <br />
                <form onSubmit={handleAddUser}>
                    <input className='border' name="name" type="text" />
                    <br /> 
                    <input className='border'  type="email" name="email" id="" />
                    <br /> 
                    <button className='border'>Add User</button>
                </form>
            </div>
            <div>
                {users.map(user=><div key={user.id}>
                   <p>{user.name}: {user.email}</p>

                </div>)}
            </div>
        </div>
    );
};

export default Users;