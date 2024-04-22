const Usuario = ()=> {
    const nombre = 'Juan';
    const color = 'red';
    const amigos = ['Pedro', 'Pablo', 'Maria'];

    return (
        <>
        <h1>
            Hola {nombre}
        </h1>
        <p style={{color: color}}>
            Bienvenido a mi sitio   
        </p>
        <br/>
        <ul>
            {amigos.map((amigo, index) => (
                <li key={index}>
                    {amigo}
                </li>
            ))}
        </ul>
        </>
    )
}

export default Usuario;