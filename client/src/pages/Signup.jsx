import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
export const Signup = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ">
        {/* left side */}
        <div className="flex-1">
        <Link to={"/"} className='sm:-text-xl font-bold dark:text-white text-4xl'>
            <span className='px-2 py-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-lg text-white'>SmartBrain's</span>
            Blog
         </Link>
         <p className='text-sm mt-5'>This is a demo project you can sign up with your email and password or with your google</p>
        </div>
        {/* right side */}
        <div className="flex-1">
           <form className='flex flex-col gap-4' >
              <div>
                 <Label value='Your username'></Label>
                 <TextInput type='text' placeholder='username' id='username'/>
              </div>
              <div>
                 <Label value='Your email'></Label>
                 <TextInput type='text' placeholder='name@company.com' id='email'/>
              </div>
              <div>
                 <Label value='Your password'></Label>
                 <TextInput type='text' placeholder='Password' id='password'/>
              </div>
              <Button gradientDuoTone='redToYellow' type='submit'>Sign up</Button>
           </form>
           <div className=" flex gap-2 text-sm mt-5">
            <span>Have an account ? </span> <Link to={"/sign-in"} className='text-blue-600'>Sign in</Link>
           </div>
        </div>
      </div>
    </div>
  )
}
