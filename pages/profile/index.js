import { getSession, useSession } from 'next-auth/react'
import React from 'react'
import { MdModeEdit } from 'react-icons/md'
const index = () => {
  const {data}=useSession()
  
  return (
    <>
      <div className='bg-white shadow text-2xl font-bold p-2 shadow-gray-400'>
        <h1>Profile</h1>
      </div>
      <div className='bg-white shadow-lg p-4 pb-6 border border-gray-200 rounded-lg border-solid shadow-gray-400 w-1/2 absolute right-1/2 mt-2  translate-x-1/2 '>
        <div >
          <img className='h-40 w-52 rounded-lg shadow shadow-gray-400' src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image" />

        </div>
        <div className='flex items-center text-2xl font-bold'>
          name <span className='mx-4 text-indigo-600'><MdModeEdit /></span>
        </div>
        <div className='mt-3 text-base font-bold'>password</div>
        <div>

          <div className="mt-4">
            <input
              id="Oldpassword"
              name="oldpassword"
              type="password"
              placeholder='Old Password'
              required
              className="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-indigo-600 focus-visible:outline-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>

          <div className="mt-4">
            <input
              id="newpassword"
              name="newpassword"
              type="password"
              placeholder='New Password'
              required
              className="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-indigo-600 focus-visible:outline-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div><div>

          <div className="mt-4">
            <input
              id="repeatpassword"
              name="repeatpassword"
              type="password"
              placeholder='Repeat Password'
              required
              className="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-indigo-600 focus-visible:outline-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className='mt-4'>
          <button
            // type="submit"

            className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 "
          >
            Update password
          </button>
        </div>
      </div>

    </>
  )
}

export default index

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false
      }
    }

  }

  return {
    props: {
      session
    }
  }

}