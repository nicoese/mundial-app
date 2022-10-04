import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {DataGrid} from '@mui/x-data-grid'
import {getAllUsers , disableUser } from '../../../../redux/actions';
// import { Button } from '@mui/material';


const Users = () => {
  
  let users = useSelector(state => state.users)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  useEffect(() => {
    
  },[users])

  //deberia hacer un Use effect y me traigo todos los users
  // ... cosa a tener en cuenta... los usuarios de google no estan.
  // podria traeme la info personal tambien...

  const handleDisable = (email,active)=>{
    dispatch (disableUser(email,active))
  }

  const handleEdit = (email)=>{
    console.log('ENTRE HANDLE EDIT',email)
  }
  
  const newColumns = [
    // { field: 'name', headerName: 'Name', width: 270 },
    { field: 'email', headerName: 'Email', width: 250,  },
    { field: 'img', headerName: 'Avatar', width: 90, renderCell: (params) => {
      // console.log(params.value)
          return (
            <> 
              {/* {<img className='w-10' src={params.value}></img>} */}
              <div className='flex justify-center w-full'>
                <Avatar src={params.value}/>
              </div>
            </>
          );
        }
    },
    { field: 'email_verified', headerName: 'Verificado', width: 100, renderCell: (params) => {
      /* console.log(params.row.email_verified
        ) */
      return (
        <div className='flex justify-center w-full'> 
         {params.row.email_verified ? <p className='bg-blue-200 text-blue-800 p-1 rounded-md'>Verificado</p> : <p className='bg-red-200 text-red-800 p-1 rounded-md'>No verificado</p>}
        </div>
      );
    }},
    { field: 'active', headerName: 'Active', width: 80, renderCell: (params) => {
      return (
          <div className='flex justify-center w-full'> 
           {params.row.active ? <p className='bg-green-200 text-green-800 p-1 rounded-md'>Activo</p> : <p className='bg-red-200 text-red-800 p-1 rounded-md'>Inactivo</p>}
          </div>
      );
    }},
    {field: 'deshabilitar',headerName: 'Deshabilitar/ Habilitar', width: 180,  renderCell: (params)=>params.row.active?<div className='flex justify-center w-full'><CancelIcon onClick={()=>handleDisable(params.row.email,false)} className='text-red-600 bg-transparent hover: cursor-pointer rounded-md' fontSize='large' /></div>:<div className='flex justify-center w-full'><CheckCircleIcon onClick={()=>handleDisable(params.row.email, true)} className='text-green-600 bg-transparent hover: cursor-pointer rounded-md' fontSize='large'  /></div>},
  ];

  return (
    users ?
    <div className='w-[80%]'>
      <DataGrid
        disableSelectionOnClick
        rows={users}
        columns={newColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        autoHeight
        // checkboxSelection 
      />
    </div>: null
  )
}

export default Users