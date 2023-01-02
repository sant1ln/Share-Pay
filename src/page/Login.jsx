import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

function Login() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [username, setUsername] = React.useState('');
  
  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  useEffect(() => {
    if(auth.user){
      navigate('/');
    }
  }, [])
  
  
  return (
    <>  
      <h1>Login</h1>

      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario:</label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export { Login };