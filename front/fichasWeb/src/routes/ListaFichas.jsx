import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Container,
    FichaWrapper,
    FichaTitle,
    FichaField,
    StrongText,
    Hr,
    LoadingText,
    AprovadoBadge
  } from '../styled/ListaFichasStyle'


export default function ListaFichas() {
  
    const [fichas, setFichas] = useState([])

    const getFichas = async() =>{

        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8080/ficha/all', {
                headers: {
                    'Authorization': `Bearer ${token}`
            }
        });
        
        const data = response.data
        setFichas(data)
    } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{

        getFichas()

    }, [])

    return (
        <Container>
          <FichaTitle>Fichas cadastradas</FichaTitle>
          {fichas.length === 0 ? (
            <LoadingText>Carregando...</LoadingText>
          ) : (
            fichas.map((ficha) => (
              <FichaWrapper key={ficha.id}>
                <FichaField>
                  <StrongText>Nome do Autor:</StrongText> {ficha.autor.nome}
                </FichaField>
                <FichaField>
                  <StrongText>ID da Máquina:</StrongText> {ficha.maquina.id}
                </FichaField>
                <FichaField>
                  <StrongText>Comentários:</StrongText> {ficha.comentarios}
                </FichaField>
                <FichaField>
                  <StrongText>Data:</StrongText> {ficha.data}
                </FichaField>
                <FichaField>
                  <StrongText>Aprovado:</StrongText> 
                  <AprovadoBadge aprovado={ficha.aprovado}>
                    {ficha.aprovado ? 'Aprovado' : 'Reprovado'}
                  </AprovadoBadge>
                </FichaField>
                <Hr />
              </FichaWrapper>
            ))
          )}
        </Container>
      );
    }
