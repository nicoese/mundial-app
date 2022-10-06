import React from 'react'
import { Link } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddIcon from '@mui/icons-material/Add';

const SideBar = () => {
  return (
    <div className='sticky top-[70px] z-0 w-[200px] h-[90vh] px-4 shadow-md'>
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
                <InventoryIcon size={30} className='mr-2'/>
                Productos
              </Link>
            </div>
            <div className='flex items-center ml-2 pl-4 w-full h-[50px] text-lg text-[#790729] duration-300 hover:bg-[#ececec] hover:font-semibold'>
              <Link to={'purchases'} className='rounded-lg flex'>
                <ShoppingCartIcon size={30} className='mr-2'/>
                Compras
              </Link>
            </div>
            <div className='flex items-center ml-2 pl-4 w-full h-[50px] text-lg text-[#790729] duration-300 hover:bg-[#ececec] hover:font-semibold'>
              <Link to={'reviews'} className='rounded-lg flex'>
                <ReviewsIcon size={30} className='mr-2'/>
                Reseñas
              </Link>
            </div>
            <div className='flex items-center ml-2 pl-4 w-full h-[50px] text-lg text-[#790729] duration-300 hover:bg-[#ececec] hover:font-semibold'>
              <Link to={'post'} className='rounded-lg flex'>
                <AddIcon size={30} className='mr-2'/>
                Nuevo Producto
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar