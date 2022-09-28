import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BsImageAlt } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import "./modal.css"
import {useAuth0} from "@auth0/auth0-react";
import NavBar from "../NavBar/NavBar";
import {MdAlternateEmail} from "react-icons/all";

const UserProfile = () => {
  const {user} = useAuth0()
  const [imgURL, setImgURL] = useState('')
  const [loading, setLoading] = useState(false) //con este estado le podemos avisar al usuario si esta actualizandose su foto 
  const [file, setFile] = useState()

  const cloud_name = 'dakxsizpf';
  const preset = 'lo8pmqjv';

  /*  esta funcion es la que sube la img a cloud y te devuelve el string(link) de referencia donde queda almacenada la img */
  const fileUpload = async (file) =>{
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
    const formData = new FormData();
    formData.append('upload_preset', `${preset}`)
    formData.append('file', file);

    try {
        const res = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
        });

        if (!res.ok) return null;

        const data = await res.json();
        return data.secure_url;

    } catch (error) {
        return null;
    }
  }

  const handleOpenModalProfilPic = ()=>{
    let bgImageModal = document.querySelector('#bg-image-modal')
    let modal = document.querySelector('#modal-img')
    
    bgImageModal.style.opacity = '1'
    bgImageModal.style.visibility = 'visible'
    modal.style.transform = "translate-y(0%)"
  }
  const handleCloseModalProfilPic = ()=>{
    let bgImageModal = document.querySelector('#bg-image-modal')
    let modal = document.querySelector('#modal-img')
    modal.style.transform = "translate-y(200%)"
    bgImageModal.style.opacity = '0'
    bgImageModal.style.visibility = 'hidden'
  }

  const handleSubmit = async (file)=>{
    setLoading(true)
    const url = await fileUpload(file)
    setLoading(false)

    if(url) setImgURL(url) && console.log("image upload succesfully");
    else alert("no se pudo crack")
  }

  return (
    <div className="flex flex-col h-[100vh] w-full">
      <div className="w-full h-[150px] bg-gradient-to-r from-[#790729] to-[#f6f6f6]">
        <div className="relative bottom-[-80px] flex flex-col items-center w-full h-[150px] bg-transparent">
          <div className="absolute z-10 flex flex-col items-center justify-center w-[160px] h-[160px] rounded-[50%] bg-gradient-to-l from-[#790729] to-[#f6f6f6]">
            <img
              src={imgURL? imgURL : user.picture}
              alt="profile picture"
              className="z-20 absolute w-[150px] h-[150px] rounded-[50%]"
            />
            <button onClick={handleOpenModalProfilPic} id='btn-profile-img' className="relative z-30 bottom-[-50px] left-[60px] flex items-center justify-center w-[35px] h-[35px] rounded-[50%] border-2 border-[#790729] bg-[#f6f6f6] hover:cursor-pointer">
              <BsImageAlt onClick={handleOpenModalProfilPic} size={18} color='#790729'/>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full h-full">
        <div className="flex flex-col items-center w-[60%] h-full">
          <div className="w-[60%] h-fit border-2 mt-[70px] text-[#790729]">
            <h4 className="flex items-center justify-center h-[70px] text-4xl font-bold font-['Lato']">{user.name}</h4>
          </div>
          <div className="w-[60%] h-fit mt-8 border-2">
            <div className="flex items-center w-full h-fit p-4">
              <HiLocationMarker size={40} color='#790729' />
              <p className="text-xl text-gray-800 font-['Lato'] ml-2">Santiago del Estero, Capital</p>
            </div>
          </div>
        </div>
      </div>
      <div id="bg-image-modal" className="modal-img-ctn">
        <div id='modal-img' className="modal-img">
          <div onClick={handleCloseModalProfilPic} id="close-image-modal" className="modal-img-close">
            <AiFillCloseCircle size={28} fill='#790729' className="cursor-pointer"/>
          </div>
          <p className="text-[#790729] text-2xl font-bold font-['Lato'] mb-4">Elige tu foto nueva foto de perfil</p>
          <input 
            onChange={(e)=>{setFile(e.target.files[0])}} 
            id="image-inp" 
            type="file" 
            name="image"
          /> 
          <button onClick={()=> handleSubmit(file)} className="w-[8em] h-[3em] mr-2 rounded-md bg-red-600 hover:bg-red-800 text-white font-bold font-[Lato]"> Guardar </button>
          <img className="h-[150px] w-[150px] border-2 border-[#790729] my-4" src="#" alt="#" />      
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
