import React from "react";
import { BsImageAlt } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import "./modal.css"

const UserProfile = () => {

  const handleOpenModalProfilPic = ()=>{
    let bgImageModal = document.querySelector('#bg-image-modal')
    let modal = document.querySelector('#modal-img')
    console.log(bgImageModal);
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

  return (
    <div className="flex flex-col h-[100vh] w-full">
      <div className="w-full h-[150px] bg-gradient-to-r from-[#790729] to-[#f6f6f6]">
        <div className="relative bottom-[-80px] flex flex-col items-center w-full h-[150px] bg-transparent">
          <div className="absolute z-10 flex flex-col items-center justify-center w-[160px] h-[160px] rounded-[50%] bg-gradient-to-l from-[#790729] to-[#f6f6f6]">
            <img
              src="https://bit.ly/3eXgVU4"
              alt="profile image"
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
            <h4 className="flex items-center justify-center h-[70px] text-4xl font-bold font-['Lato']">user name</h4>
          </div>
          <div className="w-[60%] h-fit mt-8 border-2">
            <div className="flex items-center w-full h-fit p-4">
              <HiLocationMarker size={40} color='#790729' />
              <p className="text-xl text-gray-800 font-['Lato'] ml-2" >Santiago del Estero, Capital</p>
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
            onChange={(e)=>{setImage(e.target.files[0])}} 
            id="image-inp" 
            type="file" 
            name="image"
          /> 
          <button className="w-[8em] h-[3em] mr-2 rounded-md bg-red-600 hover:bg-red-800 text-white font-bold font-[Lato]"> Guardar </button>
          <img className="h-[150px] w-[150px] border-2 border-[#790729] my-4" src="#" alt="#" />      
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
