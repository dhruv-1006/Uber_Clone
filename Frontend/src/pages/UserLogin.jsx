import React from 'react'

const UserLogin = () => {
  return (
    <div className='p-7'>
      <form action=" ">
        <h3 className='text-xl mb-2'>What's your phone number or email ?</h3>

        <input required
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
        type="text" 
        placeholder='Phone number or email'
        />

        <h3 className='text-xl mb-2'>Enter Password</h3>

        <input required 
        type="password" 
        placeholder='Password'
        />
        
        <button>Login</button>
      </form>
    </div>
  )
}

export default UserLogin