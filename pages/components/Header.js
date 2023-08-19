import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
const {data} = useSession()
  return (
    <>
    <nav className='flex justify-between w-full p-1 text-white items-center px-3 bg-indigo-600'>

        <div>Personal Blogging App</div>
        <ul className='flex justify-center items-center'>
          {data===null||data===undefined?<>
            <li className='mx-6'><Link href='/auth/signup'>signUp</Link></li>
            <li className='mx-6'><Link href='/auth/login'>Login</Link></li>
            </> :
          <>
          
          <li className='mx-6' ><Link href='/profile' >profile</Link> </li>
          <li className='mx-6' ><Link href='/dashboard' >Dashboard</Link> </li>
          <li className='mx-6' onClick={()=>signOut({ callbackUrl: '/' })}><button>logout</button> </li>


          </>
           
          }
            

        </ul>
    </nav>
      
    </>
  )
}

export default Header
