import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
          const {userid}=useParams()
  return (
    <div className='w-screen h-96 mt-10 mb-12 rounded-lg bg-gray-300 text-black text-center text-2xl'>
      User:{userid}
    </div>
  )
}

export default User
