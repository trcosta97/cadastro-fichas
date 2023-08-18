import React, { useState } from 'react'
import axios from 'axios';
import { View, Text, Button, TextInput } from 'react-native'

const baseUrl = 'http://localhost:8080';

export default function Login() {

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [token, setToken] = useState('')

    const handleLogin = () => {
        axios.post(baseUrl + '/login', {
            login: login,
            senha: senha
        })
            .then(function (response) {
                setToken(response.data.token)
                console.log(response);
            })
            .catch(function (error) {
                alert(error)
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }

            })

    }
    const getUsers = () => {
        axios.get(baseUrl + '/usuario/all', {
            headers: {
                Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJpc3MiOiJGaWNoYXMgQXBpIiwiZXhwIjoxNjkyMzk2NTk2fQ.feIqKpoltXw1qo2NxeWKp8PXjgMWsViIOAazC-iALDk`
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
        <View>
            <Text>Login</Text>
            <TextInput placeholder='Login' value={login} onChangeText={setLogin}></TextInput>
            <TextInput placeholder='Senha' value={senha} onChangeText={setSenha}></TextInput>
            <Button title='Entrar' onPress={handleLogin} />
            <Button title='Usuarios' onPress={getUsers} />
        </View>
    )
}