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
              <Avatar src={params.value}/>
            </>
          );
        }
    },
    { field: 'email_verified', headerName: 'Verificado', width: 80},
    { field: 'active', headerName: 'Active', width: 80},
    {field: 'editar',headerName: 'Editar', width: 70, renderCell: (params)=><EditIcon onClick={()=>handleEdit(params.row.email)} className='text-gray-600 bg-transparent rounded-md hover: cursor-pointer' fontSize='large' />},
    {field: 'deshabilitar',headerName: 'Deshabilitar/ Habilitar', width: 180,  renderCell: (params)=>params.row.active?<CancelIcon onClick={()=>handleDisable(params.row.email,false)} className='text-red-600 bg-transparent hover: cursor-pointer rounded-md' fontSize='large' />:<CheckCircleIcon onClick={()=>handleDisable(params.row.email, true)} className='text-green-600 bg-transparent hover: cursor-pointer rounded-md' fontSize='large'  />},


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