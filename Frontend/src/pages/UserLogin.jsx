import React from 'react'

const UserLogin = () => {
  return (
    <div className='p-7'>

      <div>
        <img className='w-16 mb-10'src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
      <form action=" ">
        <h3 className='text-lg font-medium mb-2'>What's your phone number or email ?</h3>

        <input required
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
        type="text" 
        placeholder='Phone number or email'
        />

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input required 
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="password" 
        placeholder='Password'
        />
        
        <button
        className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Login</button>
      </form>
      </div>
      
      <div>
        <button
        className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >
          Sign in as captain
        </button>
      </div>  

    </div>
  )
}

export default UserLogin