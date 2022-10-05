import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postNewProduct } from "../../../redux/actions";
import { fileUpload } from "../../../Cloudinary/FileUpload";

// Funcion para validar los inputs
function validate(input) {
  const vName = /^[a-zA-Z0-9\s]+$/;
  const vDate = /^[0-9/]+$/;
  const vPrice = /^[0-9]+$/;
  let error = {};
  if (!vName.test(input.name)) {
    error.name = "No se permite numeros y/o caracteres especiales";
  }
  if (input.name?.length === 0) {
    error.name = "Lléne el campo Nombre";
  }
  if (input.price?.length === 0) {
    error.price = "Lléne el campo Precio";
  }
  if (!vPrice.test(input.price)) {
    error.price = "No se permiten numeros negativos";
  }
  if (input.img?.length === 0) {
    error.img = "Lléne el campo Imagen URL";
  }
  if (!vName.test(input.brand)) {
    error.brand = "No se permite numeros y/o caracteres especiales";
  }
  if (input.brand?.length === 0) {
    error.brand = "Lléne el campo Marca";
  }
  if (input.stadium?.length === 0) {
    error.stadium = "Lléne el campo Estadio";
  }
  if (!vDate.test(input.date)) {
    error.date = "Debe contener una fecha";
  }
  if (input.date?.length < 5) {
    error.date = "Lléne el campo Fecha";
  }
  if (!vName.test(input.sector)) {
    error.sector = "No se permite numeros y/o caracteres especiales";
  }
  if (input.sector?.length < 1) {
    error.sector = "Lléne el campo Sector";
  }
  return error;
}

export default function FormProducts() {
  const dispatch = useDispatch();
  //Creo estados para el type , y cada uno de los tipos
  const [typee, setTypee] = useState({
    type: "",
  });
  const [jersey, setJersey] = useState({
    name: "",
    price: 0,
    type: "",
    img: "",
    brand: "",
    stock: {
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  });
  const [accessory, setAccessory] = useState({
    name: "",
    price: 0,
    type: "",
    img: "",
    stock: {
      X: 0,
    },
  });
  const [ticket, setTicket] = useState({
    name: "",
    price: 0,
    type: "",
    img: "",
    brand: "",
    stock: {
      X: 0,
    },
    date: "",
    stadium: "",
    sector: "",
  });
  const [err, setErr] = useState({});


  //Funciones handle para los input
  async function handleJersey(e) {
    let cloudImg;
    if(e.target.name === "img"){
      console.log(e.target.value)
      cloudImg = await fileUpload(e.target.value)
      console.log(cloudImg)
      setJersey({
        ...jersey,
        img: {
          ...jersey.img,
          [e.target.name]: cloudImg,
        },
      });
    }
    if (
      e.target.name === "S" ||
      e.target.name === "M" ||
      e.target.name === "L" ||
      e.target.name === "XL"
    ) {
      setJersey({
        ...jersey,
        stock: {
          ...jersey.stock,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setJersey({
        ...jersey,
        [e.target.name]: e.target.value,
      });
      setErr(
        validate({
          ...jersey,
          [e.target.name]: e.target.value,
        })
      );
    }
  }

  function handleAccessory(e) {
    e.preventDefault();
    if (e.target.name === "Z") {
      setAccessory({
        ...accessory,
        stock: {
          ...accessory.stock,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setAccessory({
        ...accessory,
        [e.target.name]: e.target.value,
      });
      setErr(
        validate({
          ...accessory,
          [e.target.name]: e.target.value,
        })
      );
    }
  }

  function handleTicket(e) {
    e.preventDefault();
    if (e.target.name === "Z") {
      setTicket({
        ...ticket,
        stock: {
          ...ticket.stock,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setTicket({
        ...ticket,
        [e.target.name]: e.target.value,
      });
      setErr(
        validate({
          ...ticket,
          [e.target.name]: e.target.value,
        })
      );
    }
  }

  function handleType(e) {
    e.preventDefault();
    setTypee({
      type: e.target.value,
    });
    if (e.target.value === "jersey") {
      setJersey({
        ...jersey,
        type: e.target.value,
      });
      setAccessory({
        name: "",
        price: "",
        type: "",
        img: "",
        stock: {
          X: 0,
        },
      });
      setTicket({
        name: "",
        price: "",
        type: "",
        img: "",
        brand: "",
        stock: {
          X: 0,
        },
        stadium: "",
        sector: "",
      });
    }
    if (e.target.value === "accessory") {
      setAccessory({
        ...accessory,
        type: e.target.value,
      });
      setJersey({
        name: "",
        price: "",
        type: "",
        img: "",
        brand: "",
        stock: {
          S: 0,
          M: 0,
          L: 0,
          XL: 0,
        },
      });
      setTicket({
        name: "",
        price: "",
        type: "",
        img: "",
        brand: "",
        stock: {
          X: 0,
        },
        stadium: "",
        sector: "",
      });
    }
    if (e.target.value === "ticket") {
      setTicket({
        ...ticket,
        type: e.target.value,
      });
      setAccessory({
        name: "",
        price: "",
        type: "",
        img: "",
        stock: {
          X: 0,
        },
      });
      setJersey({
        name: "",
        price: "",
        type: "",
        img: "",
        brand: "",
        stock: {
          S: 0,
          M: 0,
          L: 0,
          XL: 0,
        },
      });
    }
    setErr({});
  }
  
  // funcion submit
  function handleSubmit(e) {
    e.preventDefault();
    if (err.name) {
      return alert(err.name);
    }
    if (err.price) {
      return alert(err.price);
    }
    if (err.img) {
      return alert(err.img);
    }
    if (err.brand) {
      return alert(err.brand);
    }
    if (err.stadium) {
      return alert(err.stadium);
    }
    if (err.date) {
      return alert(err.date);
    }
    if (err.sector) {
      return alert(err.sector);
    }
    if (typee.type === "jersey") {
      dispatch(postNewProduct(jersey));
    } else if (typee.type === "accessory") {
      dispatch(postNewProduct(accessory));
    } else if (typee.type === "jersey") {
      dispatch(postNewProduct(ticket));
    }
  }

  return (
    <div className="w-full h-[105vh] flex  items-center justify-center bg-[#a9a9a9]">
      <div className="w-[90%] h-[auto] flex-col rounded-[10px] flex  bg-white">
        <h1 className="text-xl p-2 rounded-t-[10px] font-bold bg-[#790729] flex justify-center text-[#FFFF]">
          Crear un nuevo producto
        </h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-full h-full pb-5 justify-center text-center aling-center"
        >
          {/* select para elejir el tipo de formulario */}
          <select
            onChange={(e) => handleType(e)}
            className="text-[#790729] focus-visible:ring-0 w-full flex text-center border-t-0 border-x-0 border-b-[#a9a9a9] focus-visible:border-b-[#a9a9a9] "
          >
            <option name="type">Seleccione un tipo de producto</option>
            <option name="type">jersey</option>
            <option name="type">accessory</option>
            <option name="type">ticket</option>
          </select>
          {/* Formulario tipo Jersey */}
          {typee.type === "jersey" ? (
            <div className="flex flex-col w-[100%] justify-start h-[auto] items-center ">
              <div className="w-[30%] flex flex-col ">
                <label>Nombre :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="name"
                  onChange={(e) => handleJersey(e)}
                />
              </div>
              {err.name && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.name}
                </h5>
              )}
              <div className=" w-[30%] flex flex-col">
                <label>Precio:</label>
                <input
                  className="rounded-md"
                  type="number"
                  name="price"
                  onChange={(e) => handleJersey(e)}
                />
              </div>
              {err.price && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.price}
                </h5>
              )}
              <div className=" w-[30%] flex flex-col">
                <label>Imagen URL :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="img"
                  onChange={(e) => handleJersey(e)}
                />
              </div>
              {err.img && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.img}
                </h5>
              )}
              <div className=" w-[30%] flex flex-col">
                <label>Marca :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="brand"
                  onChange={(e) => handleJersey(e)}
                />
              </div>
              {err.brand && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.brand}
                </h5>
              )}
              <div className=" w-[33%] items-center flex flex-col">
                <label>stock :</label>
                <div className="flex gap-3">
                  <input
                    placeholder="S"
                    className="w-[25%] h-[30px] rounded-[3px]"
                    type="number"
                    name="S"
                    onChange={(e) => handleJersey(e)}
                  />
                  <input
                    placeholder="M"
                    className="w-[25%] h-[30px] rounded-[3px]"
                    type="number"
                    name="M"
                    onChange={(e) => handleJersey(e)}
                  />
                  <input
                    placeholder="L"
                    className="w-[25%] h-[30px] rounded-[3px]"
                    type="number"
                    name="L"
                    onChange={(e) => handleJersey(e)}
                  />
                  <input
                    placeholder="XL"
                    className="w-[25%] h-[30px] rounded-[3px]"
                    type="number"
                    name="XL"
                    onChange={(e) => handleJersey(e)}
                  />
                </div>
              </div>
              {err.stock && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.stock}
                </h5>
              )}
              <div className="w-[100%] mt-5 flex justify-center gap-5">
                <Link to="/admin">
                  <button
                    type="button"
                    className="w-[5rem] font-bold text-white rounded-[4px] p-1 bg-[#790729]"
                  >
                    Volver
                  </button>
                </Link>
                <button
                  type="submit"
                  className="w-[5rem] text-white font-bold rounded-[4px] p-1 bg-[#790729]"
                >
                  Crear
                </button>
              </div>
            </div>
            // Formulario tipo accessory
          ) : typee.type === "accessory" ? (
            <div className="flex flex-col w-[100%] justify-center h-[80%] items-center ">
              <div className="w-[30%] flex flex-col ">
                <label>Nombre :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="name"
                  onChange={(e) => handleAccessory(e)}
                />
              </div>
              {err.name && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.name}
                </h5>
              )}
              <div className=" w-[30%] flex flex-col">
                <label>Precio :</label>
                <input
                  className="rounded-md"
                  type="number"
                  name="price"
                  onChange={(e) => handleAccessory(e)}
                />
              </div>
              {err.price && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.price}
                </h5>
              )}
              <div className=" w-[30%] flex flex-col">
                <label>Imagen URL :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="img"
                  onChange={(e) => handleAccessory(e)}
                />
              </div>
              {err.img && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.img}
                </h5>
              )}
              <div className=" w-[auto] flex flex-col">
                <label>stock :</label>
                <input
                  placeholder="Z"
                  className="w-[60px] h-[30px] rounded-[3px]"
                  type="number"
                  name="Z"
                  onChange={(e) => handleAccessory(e)}
                />
              </div>
              <div className="w-[100%] mt-5 flex justify-center gap-5">
                <Link to="/admin">
                  <button
                    type="button"
                    className="w-[5rem] font-bold text-white rounded-[4px] p-1 bg-[#790729]"
                  >
                    Volver
                  </button>
                </Link>
                <button
                  type="submit"
                  className="w-[5rem] text-white font-bold rounded-[4px] p-1 bg-[#790729]"
                >
                  Crear
                </button>
              </div>
            </div>
            //formulario tipo Ticket
          ) : typee.type === "ticket" ? (
            <div className="flex flex-col w-[100%] justify-center h-[90%] items-center ">
              <div className="w-[30%] flex flex-col ">
                <label>Nombre :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="name"
                  onChange={(e) => handleTicket(e)}
                />
              </div>
              {err.name && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.name}
                </h5>
              )}
              <div className=" w-[30%] flex flex-col">
                <label>Precio :</label>
                <input
                  className="rounded-md"
                  type="number"
                  name="price"
                  onChange={(e) => handleTicket(e)}
                />
              </div>
              {err.price && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.price}
                </h5>
              )}
              <div className=" w-[30%] flex flex-col">
                <label>Imagen URL :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="img"
                  onChange={(e) => handleTicket(e)}
                />
              </div>
              {err.img && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.img}
                </h5>
              )}
              <div className=" w-[auto] flex flex-col">
                <label>stock :</label>
                <input
                  placeholder="Z"
                  className="w-[60px] h-[30px] rounded-[3px]"
                  type="number"
                  name="Z"
                  onChange={(e) => handleTicket(e)}
                />
              </div>
              <div className="w-[30%] flex flex-col ">
                <label>Estadio :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="stadium"
                  onChange={(e) => handleTicket(e)}
                />
              </div>
              {err.stadium && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.stadium}
                </h5>
              )}
              <div className="w-[30%] flex flex-col ">
                <label>Fecha que se juega :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="date"
                  onChange={(e) => handleTicket(e)}
                />
              </div>
              {err.date && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.date}
                </h5>
              )}
              <div className="w-[30%] flex flex-col ">
                <label>Sector :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="sector"
                  onChange={(e) => handleTicket(e)}
                />
              </div>
              {err.sector && (
                <h5 className="text-red-600 w-[30%] text-left text-[0.8rem] font-bold">
                  {err.sector}
                </h5>
              )}
              <div className="w-[100%] mt-5 flex justify-center gap-5">
                <Link to="/admin">
                  <button
                    type="button"
                    className="w-[5rem] font-bold text-white rounded-[4px] p-1 bg-[#790729]"
                  >
                    Volver
                  </button>
                </Link>
                <button
                  type="submit"
                  className="w-[5rem] text-white font-bold rounded-[4px] p-1 bg-[#790729]"
                >
                  Crear
                </button>
              </div>
            </div>
            // div que muestra cuando no se elije ningun tipo
          ) : (
            <div className="flex flex-col w-full h-full justify-center gap-40 items-center text-center">
              {" "}
              <h2> </h2> {/* dejar este h2 */}
              <Link to="/admin">
                <button
                  type="button"
                  className="w-[5rem] text-white rounded-[4px] p-1 bg-[#790729]"
                >
                  Volver
                </button>
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
