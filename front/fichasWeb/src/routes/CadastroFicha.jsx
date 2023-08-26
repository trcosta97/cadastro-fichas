import React, { useState } from 'react';
import axios from 'axios';
import {
    Container,
    FormWrapper,
    Title,
    Label,
    Input,
    TextArea,
    Dropdown,
    Button,
    ButtonBack
} from '../styled/CadastroFichaStyle';
import { useNavigate } from 'react-router-dom';

export default function CadastroFicha() {
    const [idAutor, setIdAutor] = useState('');
    const [idMaquina, setIdMaquina] = useState('');
    const [aprovado, setAprovado] = useState(true);
    const [comentario, setComentario] = useState('');
    const navigate = useNavigate();

    const handleCadastroFicha = async (event) => {
        event.preventDefault();
      
        const url = 'http://localhost:8080/ficha';
        const requestData = {
          autor: {
            id: idAutor
          },
          maquina: {
            id: idMaquina
          },
          aprovado: aprovado,
          comentarios: comentario
        };
      
        const token = localStorage.getItem('token');
      
        try {
          const response = await axios.post(url, requestData, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
      
          alert("Ficha cadastrada com sucesso");
        } catch (error) {
          console.error('Erro ao cadastrar ficha:', error.message);
        }
      };
    
    
    
    return (
        <Container>
            <FormWrapper>
                <Title>Cadastro de Ficha</Title>
                <Label>ID do Autor</Label>
                <Input
                    type="text"
                    placeholder="ID do Autor"
                    value={idAutor}
                    onChange={event => setIdAutor(event.target.value)}
                />
                <Label>ID da Máquina</Label>
                <Input
                    type="text"
                    placeholder="ID da Máquina"
                    value={idMaquina}
                    onChange={event => setIdMaquina(event.target.value)}
                />
                <Label>Status</Label>
                <Dropdown
                    value={aprovado}
                    onChange={(e) => setAprovado(e.target.value)}
                >
                    <option value={true}>Aprovado</option>
                    <option value={false}>Reprovado</option>
                </Dropdown>
                <Label>Comentários</Label>
                <TextArea
                    rows="4"
                    placeholder="Comentários"
                    value={comentario}
                    onChange={event => setComentario(event.target.value)}
                />
                <Button onClick={handleCadastroFicha}>Cadastrar</Button>
            </FormWrapper>
            <ButtonBack onClick={() => navigate('/')}>Voltar</ButtonBack>
        </Container>
    );
}
