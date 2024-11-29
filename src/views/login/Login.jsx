import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h2 className={styles.heading}>Iniciar Sesión</h2>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.label}>Usuario</label>
          <input
            id="username"
            className={styles.input}
            placeholder="Nombre de usuario"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Contraseña</label>
          <input
            type="password"
            id="password"
            className={styles.input}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit" className={styles.button}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;