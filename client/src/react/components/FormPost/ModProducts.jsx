import React, {useState, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux' 
import { getDetails, putProduct} from '../../../redux/actions';
import { useParams, useNavigate } from 'react-router-dom';

function validate(nombre) {
    const vName = /^[a-zA-ZÁ-ÿ0-9\s]+$/;
    const vPrice = /^[0-9]+$/;
    let error = {};
    if (!vName.test(nombre.name)) {
      error.name = "No se permite numeros y/o caracteres especiales";
    }
    if (nombre.name?.length === 0) {
      error.name = "Lléne el campo Nombre";
    }
    // if (input.price?.length === 0) {
    //   error.price = "Lléne el campo Precio";
    // }
    // if (!vPrice.test(input.price)) {
    //   error.price = "No se permiten numeros negativos";
    // }
    // if (input.img?.length === 0) {
    //   error.img = "Lléne el campo Imagen URL";
    // }
    return error;
  }

export default function ModProduct () {

    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getDetails(id))
    }, [dispatch])
    const p = useSelector(state => state.ProductDetail)
    const [err,setErr] = useState({})
    const [nombre ,setNombre] = useState({
        id: id,
        name : ''
    })
    const [precio ,setPrecio] = useState({
        id: id,
        price : 0
    })
    const [imagen ,setImagen] = useState({
        id: id,
        img : ''
    })
    const [stocked ,setStocked] = useState({
        id: id,
        stock: {}
    })
    const [type, setType] = useState({
        typee: ''
    })

    function handleChange (e){
     e.preventDefault();
     if(type.typee === 'Nombre'){
         setNombre({
            ...nombre,
            [e.target.name]: e.target.value
         })
         setErr(validate({
            ...nombre,
            [e.target.name]: e.target.value
         }))
     } else if(type.typee === 'Precio'){
        setPrecio({
           ...precio,
           [e.target.name]: e.target.value
        })
        setErr(validate({
            ...precio,
            [e.target.name]: e.target.value
         }))
    } else if(type.typee === 'Imagen'){
        setImagen({
           ...imagen,
           [e.target.name]: e.target.value
        })
        setErr(validate({
            ...imagen,
            [e.target.name]: e.target.value
         }))
    } else if(type.typee === 'Stock'){
        setStocked({
           ...stocked,
           stock : {
            ...stocked.stock,
            [e.target.name]: e.target.value
           }
        })
    }
    }

    function handleSubmit(e){
        e.preventDefault();
        if(type.typee === 'Nombre'){
        dispatch(putProduct(nombre))
        navigate('/admin/products')
        } else if(type.typee === 'Precio'){
        dispatch(putProduct(precio))
        navigate('/admin/products')
       } else if(type.typee === 'Imagen'){
        dispatch(putProduct(imagen))
        navigate('/admin/products')
       } else if(type.typee === 'Stock'){
        dispatch(putProduct(stocked))
        navigate('/admin/products')
       }
    }
    
    function handleType (e) {
        e.preventDefault();
        setType({
            typee: e.target.value

        }
        )
    }
    
    if(p?.type === 'jersey'){
        return (

            <div className='w-[100%] h-[100%] flex flex-col text-center items-center '>
                <div className='w-[100%] h-[60%] flex items-center flex-col'>
                    <p className='bg-[#790729] w-[100%] p-2 text-white font-bold font-[lato]'>{p?.name}</p>
                    <img className='w-[300px] h-[240px]' alt='pic-product' src={p?.img} />
                    <p>Precio: ${p?.price}</p>
                    
                        { p?.stock?.Z ? (<div>
                            <p>Stock: {p?.stock?.Z}</p>
                            </div>
                        ) : <div className=''>
                            <p>Stock: </p>
                            <div className='flex gap-3'>
                        <p>S:{p?.stock?.S}</p>
                        <p>M:{p?.stock?.M}</p>
                        <p>L:{p?.stock?.L}</p>
                        <p>XL:{p?.stock?.XL}</p>
                        </div>
                        </div>
                        }
                    
                </div>
                <div className='w-[100%] h-[10%]'>
                <select className='w-[30%] h-[60%] rounded-md' onChange={(e) => handleType (e)}>
                    <option ></option>
                    <option >Nombre</option>
                    <option >Precio</option>
                    <option >Imagen</option>
                    <option >Stock</option>
                </select>
                </div>
                { type.typee === 'Nombre'? (
               <form className='w-[100%] h-[30%]' onSubmit={handleSubmit}>
                <div className='flex w-[100%] h-[70%] flex-col items-center justify-start'>
                <label >Nuevo nombre</label>
                <input className='rounded-md' type='text' name='name'  onChange={handleChange} />
                </div>
                <button className='w-[15%] h-[20%] bg-[#790729] text-white font-bold rounded-md' type='submit'>Enviar</button>
               </form>
                ) : type.typee === 'Precio'? (
                    <form className='w-[100%] h-[30%]' onSubmit={handleSubmit}>
                    <div className='flex w-[100%] h-[70%] flex-col items-center justify-start'> 
                    <label>Nuevo Precio</label>
                    <input className='rounded-md' type='number' name='price'  onChange={handleChange} />
                    </div>
                    <button className='w-[15%] h-[20%] bg-[#790729] text-white font-bold rounded-md' type='submit'>Enviar</button>
                   </form>
                ) : type.typee === 'Imagen'? (
                    <form className='w-[100%] h-[30%]' onSubmit={handleSubmit}>
                    <div className='flex w-[100%] h-[70%] flex-col items-center justify-start'>
                    <label>Nueva imagen</label>
                    <input className='rounded-md' type='file' name='img'  onChange={handleChange} />
                    </div>
                    <button className='w-[15%] h-[20%] bg-[#790729] text-white font-bold rounded-md' type='submit'>Enviar</button>
                   </form>
                ) : type.typee === 'Stock'? (
                    <form className='w-[100%] h-[30%]' onSubmit={handleSubmit}>
                    <div className='flex w-[100%] h-[70%] flex-col items-center justify-start'>
                    <label>Nuevo stock </label>
                    <div className='flex gap-2 w-[100%] justify-center'>
                    <input className='w-[7%] h-[30px] rounded-md'  type='number' name='S'  onChange={handleChange} />
                    <input className='w-[7%] h-[30px] rounded-md'  type='number' name='M'  onChange={handleChange} />
                    <input  className='w-[7%] h-[30px] rounded-md' type='number' name='L'  onChange={handleChange} />
                    <input className='w-[7%] h-[30px] rounded-md'  type='number' name='XL'  onChange={handleChange} />
                    </div>
                    </div>
                    <button className='w-[15%] h-[20%] bg-[#790729] text-white font-bold rounded-md' type='submit'>Enviar</button>
                   </form>
                ) : <div>
                    <h1>Selecciones el cambio que desea hacer </h1>
                </div>
                
                }
            </div>
        )

    } else {
        return (
            <div className='w-[100%] h-[100%] flex flex-col text-center items-center '>
                <div className='w-[100%] h-[60%] flex items-center flex-col'>
                    <p className='bg-[#790729] w-[100%] p-2 text-white font-bold font-[lato]'>{p?.name}</p>
                    <img className='w-[300px] h-[240px]' alt='pic-product' src={p?.img} />
                    <p>Precio: ${p?.price}</p>
                    
                        { p?.stock?.Z ? (<div>
                            <p>Stock: {p?.stock?.Z}</p>
                            </div>
                        ) : <div className=''>
                            <p>Stock: </p>
                            <div className='flex gap-3'>
                        <p>S:{p?.stock?.S}</p>
                        <p>M:{p?.stock?.M}</p>
                        <p>L:{p?.stock?.L}</p>
                        <p>XL:{p?.stock?.XL}</p>
                        </div>
                        </div>
                        }
                    
                </div>
                <div className='w-[100%] h-[10%]'>
                <select className='w-[30%] h-[60%] rounded-md' onChange={(e) => handleType (e)}>
                    <option ></option>
                    <option >Nombre</option>
                    <option >Precio</option>
                    <option >Imagen</option>
                    <option >Stock</option>
                </select>
                </div>
                { type.typee === 'Nombre'? (
               <form className='w-[100%] h-[30%]' onSubmit={handleSubmit}>
                <div className='flex w-[100%] h-[70%] flex-col items-center justify-start'>
                <label >Nuevo nombre</label>
                <input className='rounded-md' type='text' name='name'  onChange={handleChange} />
                </div>
                <button className='w-[15%] h-[20%] bg-[#790729] text-white font-bold rounded-md' type='submit'>Enviar</button>
               </form>
                ) : type.typee === 'Precio'? (
                    <form className='w-[100%] h-[30%]' onSubmit={handleSubmit}>
                    <div className='flex w-[100%] h-[70%] flex-col items-center justify-start'> 
                    <label>Nuevo Precio</label>
                    <input className='rounded-md' type='number' name='price'  onChange={handleChange} />
                    </div>
                    <button className='w-[15%] h-[20%] bg-[#790729] text-white font-bold rounded-md' type='submit'>Enviar</button>
                   </form>
                ) : type.typee === 'Imagen'? (
                    <form className='w-[100%] h-[30%]' onSubmit={handleSubmit}>
                    <div className='flex w-[100%] h-[70%] flex-col items-center justify-start'>
                    <label>Nueva imagen</label>
                    <input className='rounded-md' type='file' name='img'  onChange={handleChange} />
                    </div>
                    <button className='w-[15%] h-[20%] bg-[#790729] text-white font-bold rounded-md' type='submit'>Enviar</button>
                   </form>
                ) : type.typee === 'Stock'? (
                    <form  className='w-[100%] h-[30%]' onSubmit={handleSubmit}>
                    <div className='flex w-[100%] h-[70%] flex-col items-center justify-start'>
                    <label>Nuevo stock</label>
                    <input className='rounded-md' type='number' name='Z'  onChange={handleChange} />
                    </div>
                    <button className='w-[15%] h-[20%] bg-[#790729] text-white font-bold rounded-md' type='submit'>Enviar</button>
                   </form>
                ) : <div>
                    <h1>Selecciones el cambio que desea hacer </h1>
                </div>
                
                }
            </div>
        )
    }
} 