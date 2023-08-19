import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'


const signup = () => {
  const router=useRouter()
 const [error,seterror] =  useState('')
 const [passworderror,setpassworderror] =  useState('')

    const firstNameRef=useRef()
    const lastNameRef=useRef()
    const emailRef=useRef()
    const passwordRef=useRef()
    const repeatpasswordRef=useRef()

const   sumbitform =async(e)=>{
  e.preventDefault()
  const firstName =firstNameRef.current.value
  const lastName=lastNameRef.current.value
  const email=emailRef.current.value
  const password=passwordRef.current.value
  const reaptPassword=repeatpasswordRef.current.value
  if (password === reaptPassword) {
    const response=await fetch('/api/hello',{
        method:"POST",
        body:JSON.stringify({firstName,lastName,email,password}),
        headers: {
            "Content-Type": "application/json",
          }
      })
      if (response.status===401) {
        const data=await response.json()
        seterror(data.error)
       }
       else{
        alert('Success fully SignUp')
         router.push('/auth/login')
       }
  }
  else{
    setpassworderror("please enter a same password")
  }

 

    
}

    return (
        <>
        <div className='bg-white shadow text-2xl font-bold p-2 shadow-gray-400'>
        <h1>Signup</h1>
      </div>
            <div className="flex min-h-full flex-1 flex-col justify-center  lg:px-8">


                <div className="p-6 shadow-lg border border-gray-200  border-solid shadow-gray-400 rounded-xl  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    
                    <form className="space-y-6" onSubmit={sumbitform} >
                        <div>

                            <div className="mt-2">
                                <input
                                    id="text"
                                    placeholder='First Name'
                                    name="text"
                                    type="text"
                                    ref={firstNameRef}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-indigo-600 focus-visible:outline-indigo-600  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>

                            <div className="mt-2">
                                <input
                                    id="text"
                                    name="text"
                                    placeholder='Last Name'
                                    type="text"
                                    ref={lastNameRef}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-indigo-600 focus-visible:outline-indigo-600  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>

                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    ref={emailRef}
                                    placeholder='Email'
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-indigo-600 focus-visible:outline-indigo-600  sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div>{error==='email already exit'&& <p className='text-red-500'>{error}</p>}</div>
                        </div>

                        <div>

                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder='Password'
                                    ref={passwordRef}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-indigo-600 focus-visible:outline-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>

                            <div className="mt-2">
                                <input
                                    id="repeatpassword"
                                    name="repeatpassword"
                                    type="password"
                                    placeholder='Repeat Password'
                                    ref={repeatpasswordRef}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-indigo-600 focus-visible:outline-indigo-600  sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div>{passworderror&& <p className='text-red-500'>{passworderror}</p>}</div>

                        </div>
                        {/* <div className="flex items-center justify-between">
                            <div className="text-sm">

                                <Link
                                    href={signin ? "/auth/signup" : "/auth/signin"}
                                    className="font-semibold text-indigo-600  hover:text-sky-500"
                                >

                                    {signin
                                        ? "Do not have an account? Signup"
                                        : "Already have an account? Sign in"}
                                </Link>
                            </div>
                        </div> */}
                        <div className='flex justify-center'>
                            <button
                                type="submit"

                                className="flex w-1/4  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 "
                            >
                                SignUp
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default signup
