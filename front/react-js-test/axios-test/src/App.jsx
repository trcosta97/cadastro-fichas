import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [token, setToken] = useState('')
  


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        login,
        senha,
      });

      if (response.status == 200) {
        const authToken = response.data.token;
        setToken(authToken);
        localStorage.setItem('authToken', authToken);
        console.log(response);
      }
    } catch (error) {
      alert( )
      console.log("Erro", JSON.stringify(error))
    }
  };

  const handleGetAll = () => {
    const storedToken = localStorage.getItem('authToken');    
    
    axios.get('http://localhost:8080/usuario/all', {
            headers: {
                Authorization: storedToken
            }
        })
            .then(function (response) {
                alert(sucesso)
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(JSON.stringify(error))
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
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
        <button onClick={handleGetAll}>Get</button>
      </div>
    </>
  );
}

export default App;