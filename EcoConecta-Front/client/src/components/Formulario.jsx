import React from 'react'

const Formulario = () => {
  return (
    <form action="https://formsubmit.co/sharoncpuente@gmail.com" method="POST" >
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required />

      <label htmlFor="apellido">Apellido:</label>
      <input type="text" id="apellido" name="apellido" required />

      <input type="submit" value="Enviar" />
      <input type="hidden" name="_next" value="http://localhost:5173/nosotros" />
      <input type="hidden" name='_captcha' value="false" />
    </form>
  )
}

export default Formulario