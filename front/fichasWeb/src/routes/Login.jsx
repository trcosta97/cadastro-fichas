import { useState } from "react"
import { Container,   LoginForm,
  Title,
  Label,
  Input,
  Button } from "../styled/LoginPageStyle";
import axios from 'axios';


export default function Login() {



  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');


  const handleLogin = async (event) => {
    event.preventDefault();

    const url = 'http://localhost:8080/login';
    const requestData = {
      login: login,
      senha: senha
    };

    try {
      const response = await axios.post(url, requestData);
      
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('Token:', token);
      alert("Login realizado com sucesso")
      
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);

    }
  };




  return (
    <Container>
      <LoginForm>
        <Title>Login</Title>
        <Label>Email</Label>
        <Input type="email" placeholder="Email" value={login} onChange={event => setLogin(event.target.value)} />
        <Label>Senha</Label>
        <Input type="password" placeholder="Senha" value={senha} onChange={event => setSenha(event.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
      </LoginForm>
    </Container>
  );
}