import React, {useState} from "react";
import styled from "styled-components";
import db from "./../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore"; 

export const Formulario = () => {
    const [nombre, cambiarNombre] = useState("");
    const [correo, cambiarCorreo] = useState("");

const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
        await addDoc(collection(db, "usuario"), {
            nombre: "nombre",
            correo: "correo"
        })
    } catch (error) {
         console.error("Error al agregar el usuario: ", error);
    }
   

    cambiarNombre("");
    cambiarCorreo("");
}

  return (
    <form onSubmit={onSubmit}>
        <Input 
        type="text" 
        placeholder="Nombre"
        name="nombre"
        value={nombre}
        onChange={(e)=>{
            cambiarNombre(e.target.value)
        }} />
        <Input 
        type="email" 
        placeholder="Correo"
        name="Correo"
        value={correo}
        onChange={(e)=>{
            cambiarCorreo(e.target.value)
        }} />
        <Boton type="submit">Agregar</Boton>
    </form>
  )
}

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .3s ease all;
    outline: none;
    text-align: center;

    &:focus {
        border: 2px solid dodgerblue;
    }
`;
const Boton = styled.button`
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;
