import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Container } from './styled/MenuStyle';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Outlet />
      <Container>
        <Button onClick={() => navigate('/cadastroFicha')}>Nova ficha</Button>
        <Button onClick={() => navigate('/lista')}>Buscar Ficha</Button>
        <Button onClick={() => navigate('/login')}>Sair</Button>
      </Container>
    </>
  );
}

export default App;
