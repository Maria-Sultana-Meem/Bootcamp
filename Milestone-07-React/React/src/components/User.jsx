import React from 'react'

const User = ({user}) => {
 const {name,email,id,phone}=user
    return (
    <div>
        <h1>Name:{name}</h1>
        <h2>email:{email}</h2>
        <h3>id:{id}</h3>
        <h5>phone:{phone}</h5>

    </div>
  )
}

export default User