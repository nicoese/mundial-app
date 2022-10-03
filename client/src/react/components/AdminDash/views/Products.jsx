import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {DataGrid} from '@mui/x-data-grid'
import { disableProduct } from '../../../../redux/actions';


const Products = () => {

    let prods = useSelector(state => state.products)

    useEffect(() => {
    
    }, [prods])

    let dispatch = useDispatch()

    const handleDisable = (productId,active)=>{
        dispatch (disableProduct(productId,active))
    }

    const handleEdit = (email)=>{
        console.log('ENTRE HANDLE EDIT',email)
    }

    let stock = (params)=>{

        return `S: ${params.value.S || " - "} 
                M: ${params.value.M || " - "}
                L: ${params.value.L || " - "}
                XL: ${params.value.XL || " - "}
                Z: ${params.value.Z || " - "}`
    }

    const newColumns = [
        { field: 'name', headerName: 'Name', width: 270 },
        { field: 'price', headerName: 'Price', width: 70 },
        { field: 'stock', headerName: 'Stock', width: 230, valueGetter: stock},
        { field: 'img', headerName: 'Image', width: 90, renderCell: (params) => {
            return (
                <>
                {<img className='w-10' src={params.value}></img>}
                </>
            );
        }
    },
    { field: 'active', headerName: 'Active', width: 80},
    {field: 'editar',headerName: 'Editar', width: 70, renderCell: (params)=><EditIcon onClick={()=>handleEdit(params.row.email)} className='text-gray-500 bg-transparent rounded-md hover: cursor-pointer' fontSize='large' />},
    {field: 'deshabilitar',headerName: 'Deshabilitar/ Habilitar', width: 180,  renderCell: (params)=>params.row.active?<CancelIcon onClick={()=>handleDisable(params.row._id,false)} className='text-red-600 bg-transparent hover: cursor-pointer rounded-md' fontSize='large' />:<CheckCircleIcon onClick={()=>handleDisable(params.row._id, true)} className='text-green-600 bg-transparent hover: cursor-pointer rounded-md' fontSize='large'  />},

    ];

    return (
        prods?
    <div className='w-[80%]'>
        <DataGrid
        disableSelectionOnClick 
        rows={prods}
        columns={newColumns}
        pageSize={12}
        rowsPerPageOptions={[12]}
        autoHeight
        // checkboxSelection 
        />
        {/* Products */}
        {/* {prods.map( p => {
            return(
                <h3>{p.name}</h3>
            )
        })} */}
    </div>:null
    )
}

export default Products