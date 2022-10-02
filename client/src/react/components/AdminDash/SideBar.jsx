import React from 'react'
import { Link } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'

const SideBar = () => {
  return (
    <div className='fixed top-[70px] z-0 w-[200px] h-[90vh] px-4 shadow-md'>
      <div className='flex items-center justify-center h-full w-full'>
        <div className='flex flex-col w-[80%] h-[150px]'>
          <h3 className='flex items-center h-[30px] pl-2 text-gray-400 font-bold'>Panel</h3>
          <ul>
            <div className='flex items-center ml-2 pl-4 w-full h-[50px] text-lg text-[#790729] duration-300 hover:bg-[#ececec] hover:font-semibold'>
              <Link to={'users'} className='rounded-lg flex'>
                <FaUsers size={30} className='mr-2'/>
                Usuarios
              </Link>
            </div>
            <div className='flex items-center ml-2 pl-4 w-full h-[50px] text-lg text-[#790729] duration-300 hover:bg-[#ececec] hover:font-semibold'>
              <Link to={'products'} className='rounded-lg flex'>
                <FaUsers size={30} className='mr-2'/>
                Products
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar