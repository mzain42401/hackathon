import React, { useEffect, useState } from 'react'

const index = () => {
  const [AllBlogData,setAllBlogData]=useState([])
  useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await fetch('/api/allBlog');
        const responseData = await response.json();
        setAllBlogData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setAllBlogData])
  return (

    <>
    <div className='bg-white shadow text-2xl font-bold p-2 shadow-gray-400'>
        <h1>Good Morning Readers!</h1>

      </div>


      {AllBlogData.map((element,index) => {
        return (
          <>
            <div key={index} className='bbg-white shadow-lg shadow-gray-400 border border-gray-200 border-solid mt-7 w-3/4 m-auto rounded-lg p-5'>
              <div className='flex  items-center'>

                <div >
                  <img className='h-20 w-20 m-5 rounded-lg shadow shadow-gray-400' src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image" />

                </div>
                <h1 className='text-3xl w-1/2  font-bold  '>{element.title}</h1>
                {/* <p>{element.date}</p> */}
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
