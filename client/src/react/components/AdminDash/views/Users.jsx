import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import {DataGrid} from '@mui/x-data-grid'
import { delete_user, getAllUsers } from '../../../../redux/actions';
import { Button } from '@mui/material';


const Users = () => {
  
  let users = useSelector(state => state.users)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  //deberia hacer un Use effect y me traigo todos los users
  // ... cosa a tener en cuenta... los usuarios de google no estan.
  // podria traeme la info personal tambien...

  const handleDelete = (email)=>{
    dispatch (delete_user(email))
  }

  const handleEdit = (email)=>{
    console.log('ENTRE HANDLE EDIT',email)
  }
  
  const newColumns = [
    // { field: 'name', headerName: 'Name', width: 270 },
    { field: 'email', headerName: 'Email', width: 250,  },
    { field: 'img', headerName: 'Image', width: 90, renderCell: (params) => {
          return (
            <>
              {/* {<img className='w-10' src={params.value}></img>} */}
              <Avatar src={params.value}/>
            </>
          );
        }
    },
    { field: 'email_verified', headerName: 'Verified', width: 80},
    {field: 'editar',headerName: 'Editar', width: 70, renderCell: (params)=><EditIcon onClick={()=>handleEdit(params.row.email)} className='text-red-600 bg-gray-500 rounded-md' fontSize='large' />},
    {field: 'eliminar',headerName: 'Eliminar', width: 70,  renderCell: (params)=><DeleteRoundedIcon onClick={()=>handleDelete(params.row.email)} className='text-red-600 bg-gray-500 rounded-md' fontSize='large' />},


  ];

  return (
    users ?
    <div className='w-[80%]'>
      <DataGrid
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