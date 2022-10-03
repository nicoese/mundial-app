import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import {DataGrid} from '@mui/x-data-grid'
import { useEffect } from 'react';
import { getAllPurchases } from '../../../../redux/actions';


const Purchases = () => {

    let purchases = useSelector(state=> state.allPurchases)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPurchases())
    }, [])

    const handleDelete = (id)=>{
        console.log('ENTRE HANDLE EDIT',id)
    }
    
    const handleEdit = (id)=>{
        console.log('ENTRE HANDLE EDIT',id)
    }

    let getProducts = (params)=>{
        console.log(params.value)
        return params.value.map(p=>`${p.cantidad}x \n ${p.name}`)
        // return params.value.map(p=>{<div>{`${p.cantidad}x ${p.name}`}</div>})
    }




    const newColumns = [
        // { field: 'id', headerName: 'ID', width: 220 },
        { field: 'date', headerName: 'Fecha', width: 220 },
        { field: 'email', headerName: 'Comprador', width: 220,  },
        { field: 'status', headerName: 'Estado de Compra', width: 150, },
        { field: 'products', headerName: 'Productos', width: 270, /* valueGetter: getProducts, */ renderCell: (params) => {
            return (
                <>
                    <div>{params.value.map(p=><div>{`${p.cantidad}x  ${p.name}`}</div> )}</div>
                </>
            );
        }},
        { field: 'totalPrice', headerName: 'Precio Total', width: 100,  },
        {field: 'editar',headerName: 'Editar', width: 70, renderCell: (params)=><EditIcon onClick={()=>handleEdit(params.row.id)} className='text-red-600 bg-gray-500 rounded-md' fontSize='large' />},
        {field: 'eliminar',headerName: 'Eliminar', width: 70,  renderCell: (params)=><DeleteRoundedIcon onClick={()=>handleDelete(params.row.id)} className='text-red-600 bg-gray-500 rounded-md' fontSize='large' />},
    
    
      ];
  return (
    purchases ?
    <div className='w-[80%]'>
        <DataGrid
        disableSelectionOnClick
        getRowHeight={() => 'auto'}
        rows={purchases}
        columns={newColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        autoHeight
      />
    </div> : null
  )
}

export default Purchases