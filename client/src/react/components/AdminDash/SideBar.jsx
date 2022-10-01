import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sticky top-[50px] z-0 flex-1 items-center justify-center h-[90vh] shadow-sm'>
      <div className='flex items-center justify-center h-full'>
        <div className='flex flex-col w-[50%] h-[150px] border-2 pl-2'>
          <h3 className='text-black font-bold'>Panel</h3>
          <ul>
            <Link to={'users'} className='h-[40px] rounded-sm ml-3 text-[#790729] duration-300 hover:bg-gray-200 hover:font-semibold' >
              <span className='mr-2' >O</span>
              Usuarios
            </Link>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar