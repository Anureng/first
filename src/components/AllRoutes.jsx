import Link from 'next/link'
import React from 'react'

function AllRoutes() {
  return (
    <div className=' text-sm  text-ellipsis font-bold  flex items-center justify-center space-x-6   p-2'>
            <ul className=''>
            <Link className='lg:text-xl' href="/">Main</Link>         
            </ul>
            <ul>
        <Link className='lg:text-xl' href="/home">Home</Link>
            </ul>
            <ul>
        <Link className='lg:text-xl' href="/createAccount">Create Account</Link>
            </ul>
            <ul>
            <Link className='lg:text-xl' href="/allPost">All Post</Link>
          </ul>
            <ul>
            <Link className='lg:text-xl' href="/yourPost">Create Post</Link>
                </ul>
   
    </div>
  )
}

export default AllRoutes