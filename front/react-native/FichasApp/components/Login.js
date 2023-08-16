import React, { useState} from 'react'
import axios from 'axios';
import { View, Text, Button, TextInput} from 'react-native'

const baseUrl = 'http://localhost:8080/';

export default function Login(){
    
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [token, setToken] = useState('')

    const handleLogin = () =>{
        axios.post(baseUrl+'/login',{
            login: login,
            senha: senha
        })
        .then(function(response){
            setToken(response.data.token)
            console.log(response);
        })
        .catch(function(error){
            console.log(JSON.stringify(error))
        })      
        
    }

    return(
        <View>
        <Text>Login</Text>
        <TextInput placeholder='Login' value={login} onChangeText={setLogin}></TextInput>
        <TextInput placeholder='Senha' value={senha} onChangeText={setSenha}></TextInput>
        <Button title='Entrar' onPress={handleLogin}/>
        </View>
    )
}