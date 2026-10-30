import React, { useState } from "react";

import "./App.css";


function SeccionPrincipal() {

  // Usamos el estado para controlar si mostramos un mensaje secreto o descuento

  const [mostrarMensaje, setMostrarMensaje] = useState(false);


  return (

    <main className="seccion-principal">

      {/* Adapta este título e imagen a tu temática */}

      <h1>Bienvenidos a Aura Fitness</h1>

      <p>"Ofrecemos la mejor experiencia para consguir tu fisico soñado"</p>


      <img 

        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQAUVtJSyEUgrE2bvZnER_evJvRVzvorcxdAvfAxhC8pjtAUoempmp6oI&s=10" 

        alt="Imagen representativa de tu temática" 

        className="imagen-destacada"

      />


      <br />

      <button className="boton-accion" onClick={() => setMostrarMensaje(!mostrarMensaje)}>

        {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}

      </button>


      {/* El mensaje solo aparece si el estado es verdadero */}

      {mostrarMensaje && (

        <p className="mensaje-sorpresa">¡Felicidades! Tienes un 20% de descuento en tu primera menbresia.</p>

      )}

    </main>

  );

}


export default SeccionPrincipal;