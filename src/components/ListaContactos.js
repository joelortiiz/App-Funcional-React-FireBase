import React, {useState, useEffect} from 'react';
import Styled from 'styled-components';
import db from './../firebase/firebaseConfig';
import { Contactos } from './Contactos';
import { collection, onSnapshot } from 'firebase/firestore';

export  function ListaContactos() {

  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'usuario'), (snapshot) => {

     const arregloContactos = (snapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
      }));

      setContactos(arregloContactos);
    },
  
    (error) => {
      console.log(error);
    });
  }, []);

  return (
    contactos.length > 0 &&
    <ContenedorContactos>
      {
        contactos.map((contacto => (
          <Contactos key={contacto.id} id={contacto.id} nombre={contacto.nombre} correo = {contacto.correo}/>
          
        )))
      }
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