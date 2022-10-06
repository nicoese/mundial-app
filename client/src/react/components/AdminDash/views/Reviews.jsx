import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { delete_review, getAllReviews } from '../../../../redux/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import {DataGrid} from '@mui/x-data-grid'
import swal from 'sweetalert'



const Reviews = ()=>{

    let reviews = useSelector(state=>state.allReviews)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllReviews())
    },[dispatch])

    useEffect(()=>{

    },[reviews])

    const handleDelete = (id) =>{
        // console.log(id)
        swal({
            title: 'Estas seguro?',
            text: 'Esta accion eliminara el comentario, no se puede deshacer',
            icon: 'warning',
            buttons: {
                cancel: {
                    text: "Cancelar",
                    value: false,
                    visible: true,
                    className: "",
                    closeModal: true,
                    },
                confirm: {
                    dangerMode: true,
                    text: "Aceptar",
                    value: true,
                    visible: true,
                    className: "",
                    closeModal: true
                    }
                }
        }).then(response => {
            if(response){
                dispatch(delete_review(id)) 
            }
        })
    }



    const newColumns = [
        // { field: 'name', headerName: 'Name', width: 270 },
        { field: 'date', headerName: 'Fecha', width: 220 , renderCell: (params) => {
            return (
                <>
                    <div className='flex pl-4 w-full'>{params.value.slice(0,10)}</div>
                </>
            ); 
        } },
        { field: 'email', headerName: 'Usuario', width: 220,  },
        { field: 'product', headerName: 'Producto', width: 250, renderCell: (params)=>{
            return (
                <> 
                { 
                    params.row.productId ?
                    <div>{params.row.productId.name}</div> : <div>Error :S</div>
                    
                }
                </>
            );

        }  },
        { field: 'title', headerName: 'Titulo', width: 270 },
        { field: 'content', headerName: 'Contenido', width: 270 ,renderCell: (params) =>{
            return <p>{params.row.content}</p>
        }},
        { field: 'rating', headerName: 'Rating', width: 100},
        {field: 'eliminar',headerName: 'Eliminar', width: 90,  renderCell: (params)=><DeleteIcon className='text-red-600 bg-transparent hover: cursor-pointer rounded-md' fontSize='large' onClick={()=>handleDelete(params.row._id)} />},
    
    
      ];



    return(

        reviews ?
    <div className='w-[80%]'>
      <DataGrid
        disableSelectionOnClick
        rows={reviews}
        columns={newColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        autoHeight
        getRowHeight={() => 'auto'}
      />
    </div>: null

    )
}


export default Reviews