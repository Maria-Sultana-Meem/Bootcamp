import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>Login With</h2>
            <div className='space-y-3 my-3'>
                <button className='btn w-full btn-outline btn-secondary'><FcGoogle size={25}/> Login With Google</button>
                <button className='btn w-full btn-outline btn-primary'><FaGithub size={25}/> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;