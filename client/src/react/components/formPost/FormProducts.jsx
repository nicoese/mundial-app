import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { postNewProduct } from "../../../redux/actions";


function validate(input) {
  const vName = /^[a-zA-Z\s]+$/;
  let error = {};
  if (!vName.test(input.name)) {
    error.name = "Do not use special characters and/or numbers";
  }
  if (input.name?.length === 0) {
    error.name = "Write a name";
  }
  if (input.price?.length === 0) {
    error.price = "Write a price";
  }
  if (input.img?.length === 0) {
    error.img = "Write a url";
  }

  return error;
}

export default function FormProducts() {


  const dispatch= useDispatch()
  const [input, setInput] = useState({
    name: "",
    price: "",
    type: "",
    img: "",
  });
  const [err, setErr] = useState({});

  async function handleJersey(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErr(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  async function handleType(e) {
    e.preventDefault();
    setInput({
      name: "",
      price: "",
      type: e.target.value,
      img: "",
    });
    setErr({});
  }

  async function handleStockJersey(e) {
    e.preventDefault();
    setInput({
      ...input,
      stock: {
        ...input.stock,
        [e.target.name]: e.target.value,
      },
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (err.name) { return alert (err.name)}
    if (err.price) { return alert (err.price)}
    if (err.img) { return alert (err.img)}
    dispatch(postNewProduct(input))
    
  }

  return (
    <div className="w-full h-[105vh] flex  items-center justify-center bg-[#a9a9a9]">
      <div className="w-[90%] h-[auto] flex-col rounded-[10px] flex  bg-white">
        <h1 className="text-xl p-2 rounded-t-[10px] font-bold bg-[#790729] flex justify-center text-[#FFFF]">
          Crear un nuevo producto
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="w-full h-full pb-5 justify-center text-center aling-center">
          <select
            onChange={(e) => handleType(e)}
            className="text-[#790729] focus-visible:ring-0 w-full flex text-center border-t-0 border-x-0 border-b-[#a9a9a9] focus-visible:border-b-[#a9a9a9] "
          >
            <option name="type"></option>
            <option name="type">jersey</option>
            <option name="type">accessory</option>
            <option name="type">ticket</option>
          </select>
          {input.type === "jersey" ? (
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
                <h5 className="text-red-600 text-[0.8rem] font-bold">
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
                <h5 className="text-red-600 text-[0.8rem] font-bold">
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
                <h5 className="text-red-600 text-[0.8rem] font-bold">
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
              <div className=" w-[auto] flex flex-col">
                <label>stock :</label>
                <div className="flex gap-3">
                  <input
                    placeholder="S"
                    className="w-[60px] h-[30px] rounded-[3px]"
                    type="number"
                    name="S"
                    onChange={(e) => handleStockJersey(e)}
                  />
                  <input
                    placeholder="M"
                    className="w-[60px] h-[30px] rounded-[3px]"
                    type="number"
                    name="M"
                    onChange={(e) => handleStockJersey(e)}
                  />
                  <input
                    placeholder="L"
                    className="w-[60px] h-[30px] rounded-[3px]"
                    type="number"
                    name="L"
                    onChange={(e) => handleStockJersey(e)}
                  />
                  <input
                    placeholder="XL"
                    className="w-[60px] h-[30px] rounded-[3px]"
                    type="number"
                    name="XL"
                    onChange={(e) => handleStockJersey(e)}
                  />
                </div>
              </div>
              <div className=" w-[30%] flex flex-col">
                <label>Descripcion :</label>
                <textarea
                  name="description"
                  onChange={(e) => handleJersey(e)}
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
          ) : input.type === "accessory" ? (
            <div className="flex flex-col w-[100%] justify-center h-[80%] items-center ">
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
                <h5 className="text-red-600 text-[0.8rem] font-bold">
                  {err.name}
                </h5>
              )}
              <div className=" w-[30%] flex flex-col">
                <label>Precio :</label>
                <input
                  className="rounded-md"
                  type="number"
                  name="price"
                  onChange={(e) => handleJersey(e)}
                />
              </div>
              {err.price && (
                <h5 className="text-red-600 text-[0.8rem] font-bold">
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
                <h5 className="text-red-600 text-[0.8rem] font-bold">
                  {err.img}
                </h5>
              )}
              <div className=" w-[auto] flex flex-col">
                <label>stock :</label>
                <input
                  placeholder="X"
                  className="w-[60px] h-[30px] rounded-[3px]"
                  type="number"
                  name="X"
                  onChange={(e) => handleStockJersey(e)}
                />
              </div>
              <div className=" w-[30%] flex flex-col">
                <label>Descripcion :</label>
                <textarea
                  name="description"
                  onChange={(e) => handleJersey(e)}
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
          ) : input.type === "ticket" ? (
            <div className="flex flex-col w-[100%] justify-center h-[90%] items-center ">
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
                <h5 className="text-red-600 text-[0.8rem] font-bold">
                  {err.name}
                </h5>
              )}
              <div className=" w-[30%] flex flex-col">
                <label>Precio :</label>
                <input
                  className="rounded-md"
                  type="number"
                  name="price"
                  onChange={(e) => handleJersey(e)}
                />
              </div>
              {err.price && (
                <h5 className="text-red-600 text-[0.8rem] font-bold">
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
                <h5 className="text-red-600 text-[0.8rem] font-bold">
                  {err.img}
                </h5>
              )}
              <div className=" w-[30%] flex flex-col">
                <label>Descripcion :</label>
                <textarea
                  name="description"
                  onChange={(e) => handleJersey(e)}
                />
              </div>
              <div className="w-[30%] flex flex-col ">
                <label>Estadio :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="stadium"
                  onChange={(e) => handleJersey(e)}
                />
              </div>
              <div className="w-[30%] flex flex-col ">
                <label>Fecha que se juega :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="date"
                  onChange={(e) => handleJersey(e)}
                />
              </div>
              <div className="w-[30%] flex flex-col ">
                <label>Sector :</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="sector"
                  onChange={(e) => handleJersey(e)}
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
          ) : (
            <div className="flex flex-col w-full h-full justify-center gap-40 items-center text-center">
              {" "}
              <h2>Selecctione un tipo arriba</h2>
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
