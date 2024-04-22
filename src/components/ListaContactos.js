import React, {useState} from 'react';
import Styled from 'styled-components';
import db from './../firebase/firebaseConfig';


export default function ListaContactos() {


  return (
    <ContenedorContactos>

    </ContenedorContactos>
  )
}

const ContenedorContactos = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin-top: 40 px;
  padding: 20px;
  box-sizing: border-box;`