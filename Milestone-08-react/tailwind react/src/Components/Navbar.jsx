import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [open,setOpen]=useState(false)
    return (
        <div className='flex justify-center items-center'>
            <span onClick={()=>setOpen(!open)}>
                {
                    open?<X className='md:hidden'></X>:<Menu className='md:hidden'></Menu>
                }
        
      
      </span>
            <ul className='flex gap-5'>
                <li>Home</li>
                <li>Contact</li>
                <li>About-Us</li>
                <li>Login</li>
            </ul>
        </div>
    );
};

export default Navbar;