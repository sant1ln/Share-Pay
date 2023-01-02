import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
/* import { useAuth } from '../auth'; */

import './styles/login.css'

function Login() {
  const navigate = useNavigate();
  /* const auth = useAuth(); */
  const { login } = useContext(AuthContext);
  const [username, setUsername] = React.useState('');

  const onLogin = (e) => {
    e.preventDefault();
    login(username);
    navigate('/');
  };

  /* useEffect(() => {
    if(auth.user){
      navigate('/');
    }
  }, []) */


  return (
    <section className='login'>
      <div className='login-banner'>

      </div>
      <section className='login-form-container'>
        <form className='login-form' onSubmit={onLogin}>
        <h1>Inicia sesión</h1>
          <label htmlFor='user'>Usuario</label>
          <input
            id="user"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
          />
          <Link to="/recovery" className='login-form-recovery'>
            ¿Olvidaste tu contraseña?
          </Link>
          <button type="submit">Entrar</button>
        </form>
      </section>
    </section>
  );
}

export { Login };