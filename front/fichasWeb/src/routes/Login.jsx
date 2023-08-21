import { useState } from "react"
import TextInputField from "../components/textInputField"
import { Form } from "react-router-dom";
import { LoginStyle } from "../styled/LoginStyle";
import axios from 'axios';


export default function Login() {



  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao enviar o formulário

    const url = 'http://localhost:8080/login';
    const requestData = {
      login: login,
      senha: senha
    };

    try {
      const response = await axios.post(url, requestData);
      const token = response.data.token; 
      console.log('Token:', token);
      setToken(token); 
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);

    }
  };




    return (
      <LoginStyle>
        <Form onSubmit={handleLogin}>
          <h2>Login</h2>
          <TextInputField
            value={login}
            necessary={true}
            label=""
            onChange={event=>setLogin(event.target.value)}
            placeholder="Email"
          />
          <TextInputField
            value={senha}
            necessary={true}
            label=""
            onChange={event=>setSenha(event.target.value)}
            placeholder="Senha"
          />
          <button type="submit">Login</button>
        </Form>

      </LoginStyle>
    )
  }