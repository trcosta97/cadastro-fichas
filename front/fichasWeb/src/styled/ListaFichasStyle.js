import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

export const FichaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 20px auto;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const FichaTitle = styled.h2`
  margin-bottom: 10px;
  color: #333333;
`;

export const FichaField = styled.div`
  margin-bottom: 5px;
`;

export const StrongText = styled.strong`
  font-weight: bold;
  color: #555555;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid #cccccc;
  margin: 10px 0;
`;

export const LoadingText = styled.p`
  margin-top: 20px;
  color: #888888;
`;

export const AprovadoBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${(props) => (props.aprovado ? '#4CAF50' : '#F44336')};
  color: #ffffff;
  font-weight: bold;
  margin-left: 10px;
`;
