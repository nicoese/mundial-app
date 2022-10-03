import React from 'react'
import {useSelector} from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import {DataGrid} from '@mui/x-data-grid'

const Products = () => {

let prods = useSelector(state => state.products)

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
    {field: 'editar',headerName: 'Editar', width: 70, renderCell: ()=><EditIcon className='text-red-600 bg-gray-500 rounded-md' fontSize='large' />},
    {field: 'eliminar',headerName: 'Eliminar', width: 70, renderCell: ()=><DeleteRoundedIcon className='text-red-600 bg-gray-500 rounded-md' fontSize='large' />},

    ];

    return (
    <div className='w-[80%]'>
        <DataGrid 
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
    </div>
    )
}

export default Products