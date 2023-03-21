import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Loginform() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('./productos.js');
  };
  function validarFormularioLogin() {
    // CAMPO CORREO
    let nombre = document.getElementById("loginNombre").value;
    let correo = document.getElementById("loginCorreo").value;

    let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre == null || nombre == "") {
        alert("El campo nombre esta vacio");
        return false;
      }
    
  
      let valido = true;
      for (let i = 0; i < nombre.length; i++) {
        let caracter = nombre.charAt(i);
        if (
          !(
            (caracter >= "a" && caracter <= "z") ||
            (caracter >= "A" && caracter <= "Z") ||
            caracter == " "
          )
        ) {
          valido = false;
        }
      }
      if (!valido) {
        alert("El nombre solo puede contener letras.");
        return false;
      }

    if (correo == null || correo == "") {
      alert("El campo correo está vacio");
      return false;
    }

    if (patron.test(correo)) {
    } else {
      alert(
        "El correo electrónico es inválido. Por favor, ingrese un correo electrónico válido."
      );
      return false;
    }

    // CAMPO CONTRASEÑA

    let contraseña = document.getElementById("loginContraseña").value;

    if (contraseña == null || contraseña == "") {
      alert("El campo contraseña está vacio");
      return false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(contraseña)) {
      alert("La contraseña solo puede contener letras y números");
      return false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(contraseña)) {
      alert("La contraseña solo puede contener letras y números");
      return false;
    }

    if (contraseña.length > 10) {
      alert(
        "La contraseña que has introducido es muy larga, solo puede contener 10 caracteres"
      );
      return false;
    }

    // Si llegamos aquí, la validación es correcta, navegar a otra página
    
  }

  return (
    <form onSubmit={handleSubmit}>

        <label htmlFor="loginNombre">Nombre</label>
        <input type="nombre" id="loginNombre" name="loginNombre"  />
        
        <label htmlFor="loginCorreo">Correo electrónico:</label>
        <input type="email" id="loginCorreo" name="loginCorreo"  />

        <label htmlFor="loginContraseña">Contraseña:</label>
        <input type="password" id="loginContraseña" name="loginContraseña"  />

        <button onClick={validarFormularioLogin}>Iniciar sesión</button>
      </form>
    );
}

export default Loginform;
