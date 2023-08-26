import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const FormWrapper = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333333;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #555555;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  font-size: 14px;
  resize: vertical;
`;

export const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`
export const ButtonBack = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  bottom: 0; 
  left: 0;   

  &:hover {
    background-color: #0056b3;
  }
`;
