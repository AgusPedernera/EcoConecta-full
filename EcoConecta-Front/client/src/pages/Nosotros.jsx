import React, { useState } from 'react'
import NavBar from '../components/NavBar'

const Nosotros = () => {
    function mostrarPregunta(numero) {
        var pregunta = pregunta + numero;
        var respuesta = document.getElementById("respuesta" + numero);
    
        var radioSi = document.getElementById("pregunta" + (numero - 1) + "Si");
    
        if (radioSi.checked) {
            pregunta.classList.remove("hidden");
        } else {
            pregunta.classList.add("hidden");
            // Limpiamos la respuesta cuando se oculta la pregunta
            respuesta.value = "";
        }
    }
    

    


    const [formData, setFormData] = useState({
        nombre: '',
        categoria: '',
        tipo: '',
        direccion: '',
        telefono: '',
        instagram: '',
        paginaWeb: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío o almacenamiento de los datos
        console.log(formData);
        // También puedes enviar los datos a un servidor o realizar otras acciones según tus necesidades
    };
    return (
            <div>
                <NavBar />
                <form onSubmit={handleSubmit}>
        <label>
            Nombre:
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </label>
        <br />

        <label>
            Categoría:
            <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} />
        </label>
        <br />

        <label>
            Tipo:
            <input type="text" name="tipo" value={formData.tipo} onChange={handleChange} />
        </label>
        <br />

        <label>
            Dirección:
            <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
        </label>
        <br />

        <label>
            Teléfono:
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
        </label>
        <br />

        <label>
            Instagram:
            <input type="text" name="instagram" value={formData.instagram} onChange={handleChange} />
        </label>
        <br />

        <label>
            Página web:
            <input type="text" name="paginaWeb" value={formData.paginaWeb} onChange={handleChange} />
        </label>
        <br />

        <button type="submit">Enviar</button>
        </form>
  
        </div>
    )
}

export default Nosotros
