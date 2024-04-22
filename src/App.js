import React from 'react';
import styled from 'styled-components';
import { Formulario } from './components/Formulario';


 const App = () => {
  return (
    <>
<Contenedor>
    <Titulo>
Lista de contactos
    </Titulo>
    <Formulario/>
</Contenedor>
    </>
  )

  
}
const Contenedor = styled.div`
  margin: 40px;
  padding: 20px;
  background-color: #fff;
  text-align: center;
  width: 400px;`

  const Titulo = styled.h1`
  margin-bottom: 20px;`

  export default App;