import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
/* import { useAuth } from '../auth'; */

function Login() {
  const navigate = useNavigate();
  /* const auth = useAuth(); */
  const { login } = useContext(AuthContext);
  const [username, setUsername] = React.useState('Mr.X');
  
  const onLogin = (e) => {
    e.preventDefault();
    login( username   );
    
    navigate('/');
  };

  /* useEffect(() => {
    if(auth.user){
      navigate('/');
    }
  }, []) */
  
  
  return (
    <>  
      <h1>Login</h1>

      <form onSubmit={onLogin}>
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