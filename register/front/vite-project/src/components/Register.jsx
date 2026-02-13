import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='shadow-lg px-8 py-5 border w-100 rounded-md'>
        <h2 className='text-lg font-bold mb-4'>Register</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor="username" className='text-gray-700'>username</label>
            <input type='text' placeholder='Enter Your User Name...' name='username' className='w-full px-3 py-2 border'/>
          <div className='mb-4'>
            <label htmlFor='email' className='text-gray-700'>email</label>
            <input type='email' placeholder='Enter Your Email...' name='email' className='w-full px-3 py-2 border' />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='text-gray-700'>password</label>
            <input type='password' placeholder='Enter Your Password...' name='password' className='w-full px-3 py-2 border' />
          </div>
          <div className='mb-4'>
            <label htmlFor='profile_image' className='text-gray-700'>profile_image</label>
            <input type='file' name='profile_image' className='w-full px-3 py-2 border' />
          </div>
            <button type='submit' className='w-full bg-green-500 text-white py-2'>Sign Up</button>
          </div>
        </form>
        <div className='text-center mt-4'>
          <span className='text-gray-700'>Already Have an Account? | </span>
          <Link to="/login" className='text-blue-500 underline'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register