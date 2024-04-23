import React, { useState } from 'react'
import Styled, { styled } from 'styled-components'

export const Contactos = ({ id, nombre, correo }) => {

  const [editantoTarea, cambiarEditandoTarea] = useState(false)
  return (
    <div>
      <ContenedorContacto>
        {editantoTarea ?
          <form action=""> 
          <Input
            type=' text'
            name='nombre'
            placeholder='Nombre'>

          </Input>
          <Input
            type=' text'
            name='nombre'
            placeholder='Nombre'>

          </Input>
          <Boton type='submit'>Actualizar</Boton>
          </form>
          : <Nombre>{nombre}</Nombre>}
          <Correo>{correo}</Correo>
          <Boton onClick={()=> cambiarEditandoTarea()}>Editar</Boton>
          </ContenedorContacto> 
      </div>
  )
}
const ContenedorContacto = styled.div`
padding: 10px;
border-bottom: 1px solid #E1E1E1;`

const Nombre = styled.p`
  font-weight: bold;`

const Correo = Styled.p`
font-style: italic;
color: #6B6B6B;
margin; 5px 0;
`

const Boton = Styled.button`
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 2px;
  margin-bottom: 10px;
  transition: .3s ease all;
  outline: none;
  background-color: #007D35;
  color: #FFF;
  font-size: 16px;
  &:hover {
    background-color: #127A31;
  }
`
const Input = Styled.input`
padding: 10px;
border: 1px solid #E1E1E1;
border-radius: 5px;
width: 100%;
margin-bottom: 10px;
transition: .3s ease all;
outline: none;
text-align: center;

&:focus {border: 2px solid #007D35;}
`