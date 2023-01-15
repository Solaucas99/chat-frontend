import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { styled } from '../Styles/stitches.config';

const DivLogin = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
});

function Login() {
  const [name, setName] = useLocalStorage('username', '');
  const navigate = useNavigate();

  return (
    <DivLogin>
      <form
        onSubmit={ev => {
          ev.preventDefault();
          navigate('/chat');
        }}
      >
        <label htmlFor="username">
          Username
          <input
            type="text"
            placeholder="Login"
            onChange={ev => {
              setName(ev.target.value);
            }}
            name="username"
          />
        </label>

        <button type="submit">Entrar</button>
      </form>
    </DivLogin>
  );
}

export default Login;
