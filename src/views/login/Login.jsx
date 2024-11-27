//Importaciones
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
  const navigate = useNavigate();

  //Estados
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  //Estado para manejar errores
  const [error, setError] = useState("");

  //Guardar valor username
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  //Guardar valor password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores anteriores
    const data = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();

      if (result.token) {
        localStorage.setItem("token", result.token);
        navigate("/"); // Redirecciona a la vista "/home"
        console.log("Token generado correctamente");
      } else {
        setError("Usuario o contraseña incorrectos");
        console.log("No existe token");
      }
    } catch (error) {
      console.error("Error al autenticar:", error);
      setError("Error al autenticar. Inténtalo de nuevo.");
    }
  };*/

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              id="username"
              onChange={handleUsername}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handlePassword}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Ingresar
          </button>
          <Link to="/">
            <button type="submit" className="back-button">
              Volver
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
