import React, { useState } from 'react';

const FormAction = () => {
    const [name,setName]= useState('')
    const [error,setError]= useState('')
   const handleSubmit=(e)=>{
    e.preventDefault()
    
   }
   const handleOnchange=e=>{
    setName(e.target.value)
    if(name.length<6){
        setError("name must be 6 character")
    } else{
        setError('')
    }
   }
    return (
        <div className='border w-[400px] mx-auto p-6 rounded-lg mt-11'>
            <form onSubmit={handleSubmit}>
              <input onChange={handleOnchange} defaultValue={name} className='border rounded-xl p-2 w-full' required type="text" name="name" id="" placeholder='name'/> <br /> <br />
              <input className='border rounded-xl p-2 w-full' required type="email" name="email" id="" placeholder='email'/><br /> <br />
              <input className='btn w-full' type="submit" value="submit" />
            </form>
            <p className="text-red-500">{error}</p>
        </div>
    );
};

export default FormAction;