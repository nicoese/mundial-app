import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {DataGrid} from '@mui/x-data-grid'
import { disableProduct, getAllProducts } from '../../../../redux/actions';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const Products = () => {
    let prods = useSelector(state => state.products)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    useEffect(() => {
        
    }, [prods])

    const handleDisable = (productId,active)=>{
        dispatch (disableProduct(productId,active))
    }
    
    const handleEdit = (id)=>{
        console.log(id) &&
        navigate(`products/${id}`,{replace:true})
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
    { field: 'active', headerName: 'Active', width: 120,  renderCell: (params)=> <div className='flex justify-center w-full'> 
    {params.row.active ? <p className='bg-blue-200 text-blue-800 p-1 rounded-md'>Disponible</p> : <p className='bg-red-200 text-red-800 p-1 rounded-md'>No disponible</p>}
   </div>},
    {field: 'editar',headerName: 'Editar', width: 70, renderCell: (params)=><div className='flex justify-center w-full'><Link to={`${params.row.id}`}><EditIcon className='text-gray-500 bg-transparent rounded-md hover: cursor-pointer' fontSize='large' /></Link></div>},
    {field: 'deshabilitar',headerName: 'Deshabilitar/ Habilitar', width: 180,  renderCell: (params)=>params.row.active ? <div className='flex justify-center w-full'><CancelIcon className='text-red-600 bg-transparent hover: cursor-pointer rounded-md' fontSize='large' /></div>:<div className='flex justify-center w-full'><CheckCircleIcon onClick={()=>handleDisable(params.row._id, true)} className='text-green-600 bg-transparent hover: cursor-pointer rounded-md' fontSize='large'  /></div>},

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