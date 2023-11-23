import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { epilogueFont } from '../assets/fonts/fontsExport'
import EnterButton from '../assets/svg/login/enterButton';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import { toastConfig } from '../utils/Toast';
import { useAuth } from '../utils/handleAuth';


function SignUp({ navigation }) {

    const [epilogueLoaded] = epilogueFont();

    const [nomeInput, setNomeInput] = useState('');
    
    const [emailInput, setEmailInput] = useState('');

    const [senhaInput, setSenhaInput] = useState('');

    const [cpfInput, setCpfInput] = useState('');

    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
      async function getAuth(){
        const data = await useAuth();
        console.log(data)
        if(data !== ''){
          navigation.navigate('Crud Funcionários')
        }
      }
      getAuth()
    }, [])

    function deleteInputs(){
          setNomeInput('')
          setEmailInput('')
          setSenhaInput('')
          setCpfInput('')
    }

    function checkInputs(){
      if(cpfInput == ''){setErrorMessage("CPF")}
      if(senhaInput == ''){setErrorMessage("Senha")}
      if(emailInput == ''){setErrorMessage("Email")}
      if(nomeInput == ''){setErrorMessage("Nome")}
      return !(nomeInput == '' || emailInput == ''|| senhaInput == '' || cpfInput == '')
    }

    function handleSubmit(){
      if(checkInputs()){
        axios.post('http://10.112.240.225:3000/cliente', {
          nome: nomeInput,
          email: emailInput,
          senha: senhaInput,
          cpf: cpfInput,
          enderecoId: 0,
          dataDeNascimento: "0"
        }).then((response) => {
  
          if(response.status == 201){
            navigation.navigate('Crud Serviços')
          }
          deleteInputs()
        })  
      }
      else{
        Toast.show({
          type: 'error',
          text1: 'Erro!',
          text2: `Erro o campo de ${errorMessage} está vazio!`,
          visibilityTime : 15000,
        })
      }
    }


    if (!epilogueLoaded) {
        return null;
    }

  return (
    <View className="h-screen w-screen items-center pt-10">
      <Text style={{ fontFamily: 'EpilogueLight', fontSize: 32 }}>Faça Cadastro</Text>

      <Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 35,
        fontWeight: 'bold'
      }}>Digite seu Nome abaixo:</Text>
      <TextInput
        style={styles.shadowInput}
        placeholder="Seu nome aqui!"
        value={nomeInput}
        onChangeText={(text) => setNomeInput(text)}
        returnKeyType="next"
      />


<Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
      }}>Digite seu E-mail abaixo:</Text>
      <TextInput
        style={styles.shadowInput}
        placeholder="Email@gmail.com"
        value={emailInput}
        onChangeText={(text) => setEmailInput(text)}
        returnKeyType="next"
      />


      <Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
      }}>Digite sua senha abaixo</Text>
      <TextInput
        style={styles.shadowInput}
        placeholder="Sua senha aqui!"
        value={senhaInput}
        onChangeText={(text) => setSenhaInput(text)}
        returnKeyType="next"
      />


      <Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
      }}>Digite seu CPF abaixo:</Text>
      <TextInput
        style={styles.shadowInput}
        keyboardType='numeric'
        placeholder="999-999-999-99"
        value={cpfInput}
        onChangeText={(text) => setCpfInput(text)}
        returnKeyType="next"
      />
{/* <Button title='show' onPress={() => Toast.show({
  type: 'error',
  text1: 'Erro!',
  text2: `Erro o campo de teste está vazio!`,
})} /> */}
<EnterButton
onPress={() => handleSubmit()}
style={{marginTop: 30}}/>

  <Toast
  config={toastConfig}
  position='bottom'
  bottomOffset={150}
  />
    </View>
  )
}


const styles = StyleSheet.create({
    shadowInput: {
        shadowColor: "#000000",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 0.3,
      height: 45,
      fontSize: 18,
      width: 300,
      margin: 12,
      padding: 10,
    },
  });

export default SignUp