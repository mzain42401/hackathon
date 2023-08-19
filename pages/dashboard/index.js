import { getSession, useSession } from 'next-auth/react'
import React, { useEffect, useRef, useState } from 'react'

const index = () => {
  const { data } = useSession()
  function email() {
    const user = data?.user
    return user?.email
  }

  const [blogData, setBlogData] = useState([])
  useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await fetch('/api/allBlog',{
          method: "POST",
          body:JSON.stringify({email: data?.user?.email}),
          headers: {
            "Content-Type": "application/json",
          }
        });
        const responseData = await response.json();
        setBlogData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data?.user?.email])

 
  const titleRef = useRef()
  const descriptionRef = useRef()

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const title = titleRef.current.value
    const description = descriptionRef.current.value
    const response = await fetch('/api/blog', {
      method: "POST",
      body: JSON.stringify({ title, description, email: email() }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (response.status === 200) {
      alert("Success fully blog added")
    }



  }

  return (
    <>
      <div className='bg-white shadow text-2xl font-bold p-2 shadow-gray-400'>
        <h1>Dashboard</h1>
      </div>
      <form onSubmit={onFormSubmit}>
        <div className='bg-white shadow-lg shadow-gray-400 border border-gray-200 rounded-lg border-solid w-3/4 m-auto py-2 px-6 mt-4'>

          <div className="mt-4">
            <input
              id="placeholder"
              name="placeholder"
              type="text"
              ref={titleRef}
              placeholder='Placeholder'
              required
              className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-indigo-600 focus-visible:outline-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-4">
            <textarea
              rows="3" cols="50"
              id="discription"
              name="discription"
              type="text"
              ref={descriptionRef}
              placeholder='What is in your mind'
              required
              className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 focus:ring-indigo-600 focus-visible:outline-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className='mt-4'>
            <button
             

              className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 "
            >
              Publish blog
            </button>
          </div>
        </div>
      </form>

      {blogData.map((element,index) => {
        return (
          <>
            <div key={index} className='bbg-white shadow-lg shadow-gray-400 border border-gray-200 border-solid mt-7 w-3/4 m-auto rounded-lg p-5'>
              <div className='flex  items-center'>

                <div >
                  <img className='h-20 w-20 m-5 rounded-lg shadow shadow-gray-400' src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image" />

                </div>
                <h1 className='text-3xl w-1/2  font-bold  '>{element.title}</h1>
               
              </div>

              <p className='m-5 text-base'>{element.description}</p>
            </div>

          </>
        )


      })

      }



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
