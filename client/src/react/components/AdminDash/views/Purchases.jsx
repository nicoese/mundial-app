import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CancelIcon from '@mui/icons-material/Cancel';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
        { field: 'date', headerName: 'Fecha', width: 220, renderCell: (params) => {
            return (
                <>
                    <div className='flex pl-4 w-full'>{params.value.slice(0,10)}</div>
                </>
            ); 
        }},
        { field: 'email', headerName: 'Comprador', width: 220,  },
        { field: 'products', headerName: 'Productos', width: 270, /* valueGetter: getProducts, */ renderCell: (params) => {
            return (
                <>
                    <div>{params.value.map(p=><div>{`${p.cantidad}x  ${p.name}`}</div> )}</div>
                </>
            );
        }},
        { field: 'totalPrice', headerName: 'Precio Total', width: 100,  },
        {field: 'status',headerName: 'Estado de Compra', width: 180,  renderCell: (params)=>params.row.status === "failed" ?<CancelIcon className='text-red-600 bg-transparent hover: cursor-pointer rounded-md' fontSize='large' />: params.row.status === "success" ?<CheckCircleIcon className='text-green-600 bg-transparent hover: cursor-pointer rounded-md' fontSize='large'  />: <PendingIcon className='text-yellow-600 bg-transparent hover: cursor-pointer rounded-md' fontSize='large'  /> },

        
    
    
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