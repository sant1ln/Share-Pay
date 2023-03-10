import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth/AuthContext';
/* import { useAuth } from '../auth'; */

import './styles/login.css'

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [user, setUser] = React.useState({name:'Mr.X',password:'hello friend'});

  const onLogin = (e) => {
    e.preventDefault();
    if(user.name.trim().length > 0 && user.password.trim().length > 0){
      login(user.name);
      navigate('/');
    }
  };

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
            value={user.name}
            onChange={e => setUser({...user, name: e.target.value})}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            value={user.password}
            onChange={e => setUser({...user, password: e.target.value})}
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