import React, { use } from 'react'
import User from './User'
const Users = ({fetchUsers}) => {
  
  const users= use(fetchUsers)
 
  
    return (
    <div>
      
        <h3>User :{users.length} </h3>
        {
            users.map(user=> <User user={user} />)
        }
        
    </div>
    
  )
}

export default Users