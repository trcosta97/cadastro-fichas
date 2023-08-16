import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        login,
        senha,
      });

      if (response.status == 200) {
        const token = response.data.token;
        alert('Sucesso')
        console.log(token)
      }
    } catch (error) {
      alert( )
      console.log("Erro", JSON.stringify(error))
    }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <div>
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </>
  );
}

export default App;