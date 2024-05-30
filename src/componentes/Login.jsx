import { useState } from "react";
import {Link} from 'react-router-dom'


export const Login = () => {

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value
        });
      };
      console.log("asdad")
    
      const validateForm = () => {
        const newErrors = {};

        if (!form.email) newErrors.email = 'El correo electrónico es requerido';
        if (!form.password) newErrors.password = 'La contraseña es requerida';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          
          console.log('Formulario válido, enviar datos:', form);
        }
      };
    
      return (
        <div className="register-container">
          <h2>Crear Cuenta</h2>
          <form onSubmit={handleSubmit} >
            <div>
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <button type="submit">Aceptar</button>
            <button type="submit">Registrar</button>
          </form>
        </div>
      );
}