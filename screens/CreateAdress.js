import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { epilogueFont } from '../assets/fonts/fontsExport'
import EnterButton from '../assets/svg/login/enterButton';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import { toastConfig } from '../utils/Toast';
import { useAuth } from '../utils/handleAuth';
import { IP } from '../utils/env';
import { storeData } from '../utils/cacheStorageManager';


function CreateAdress({ navigation, route }) {


    const { nome,  email, senha, cpf, dataNasc } = route.params;


    const [epilogueLoaded] = epilogueFont();

    const [ruaInput, setRuaInput] = useState('');
    
    const [bairroInput, setBairroInput] = useState('');

    const [cidadeInput, setCidadeInput] = useState('');

    const [cepInput, setCepInput] = useState('');

    const [lastLengthCep, setLastLengthCep] = useState(0);

    const [numeroInput, setNumeroInput] = useState('');

    const [complementoInput, setComplementoInput] = useState('');

    const [errorMessage, setErrorMessage] = useState('');



    useEffect(() => {
        if(cepInput.length <= lastLengthCep){
          setCepInput('')
          setLastLengthCep(0)
        }
        else{
          if(cepInput.length == 5){
            setCepInput(cepInput + '-')
          }
        }
        if(cepInput.length >= 9){
          setCepInput(cepInput.substring(0, 9))
        }
        setLastLengthCep(cepInput.length)
      }, [cepInput])

      useEffect(() => {

        if(numeroInput.length >= 4){
            setNumeroInput(numeroInput.substring(0, 4))
        }
      }, [numeroInput])

    function deleteInputs(){
        setRuaInput('')
        setBairroInput('')
        setCidadeInput('')
        setCepInput('')
        setNumeroInput('')
        setComplementoInput('')
    }

    function checkInputs(){
      if(ruaInput == ''){setErrorMessage("Rua")}
      if(bairroInput == ''){setErrorMessage("Bairro")}
      if(cidadeInput == ''){setErrorMessage("Cidade")}
      if(cepInput == ''){setErrorMessage("Cep")}
      if(numeroInput == ''){setErrorMessage("Numero")}
      return !(ruaInput == '' || bairroInput == ''|| cidadeInput == '' || cepInput == '' || numeroInput == '' || cepInput == '')
    }



    function handleSubmit(){
      if(checkInputs()){
        axios.post(`http://${IP}:3000/endereco`, {
            rua: ruaInput,
            bairro: bairroInput,
            complemento: complementoInput,
            numero: numeroInput,
            cidade: cidadeInput,
            cep: cepInput,
            pais: 'Brasil',
            estado: ''
        }).then((response) => {
          if(response.status == 201){
            axios.post(`http://${IP}:3000/cliente`, {
                nome: nome,
                email: email,
                senha: senha,
                cpf: cpf,
                dataDeNascimento: dataNasc,
                enderecoId: response.data.id
            }).then((response) => {
                if(response.status == 201){
                    navigation.navigate('Menu de Usuário')
                    storeData(response.data.email, response.data.senha, response.data.id, false)
                    deleteInputs()
                }
            })
        }
        else{
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: `Erro na criação do usuario!`,
                visibilityTime : 15000,
              })
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
    <View className="h-screen w-screen items-center pt-2">
      <Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 25,
        fontWeight: 'bold'
      }}>Digite seu Cep abaixo:</Text>
      <TextInput
        style={styles.shadowInput}
        placeholder="Seu Cep aqui!"
        keyboardType='numeric'
        value={cepInput}
        onChangeText={(text) => setCepInput(text)}
        returnKeyType="next"
      />


<Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 2,
        fontWeight: 'bold'
      }}>Digite sua Cidade abaixo:</Text>
      <TextInput
        style={styles.shadowInput}
        placeholder="Campinas"
        value={cidadeInput}
        onChangeText={(text) => setCidadeInput(text)}
        returnKeyType="next"
      />


      <Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 2,
        fontWeight: 'bold'
      }}>Digite seu Bairro abaixo</Text>
      <TextInput
        style={styles.shadowInput}
        placeholder="Bairro dos limõeiros"
        value={bairroInput}
        onChangeText={(text) => setBairroInput(text)}
        returnKeyType="next"
      />


      <Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 2,
        fontWeight: 'bold'
      }}>Digite sua Rua abaixo:</Text>
      <TextInput
        style={styles.shadowInput}
        placeholder="Rua das Luas"
        value={ruaInput}
        onChangeText={(text) => setRuaInput(text)}
        returnKeyType="next"
      />

<Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 2,
        fontWeight: 'bold'
      }}>Digite o Número abaixo:</Text>
      <TextInput
        style={styles.shadowInput}
        keyboardType='numeric'
        placeholder="1111"
        value={numeroInput}
        onChangeText={(text) => setNumeroInput(text)}
        returnKeyType="next"
      />
      <Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 2,
        fontWeight: 'bold'
      }}>Complemento ou Adicionais:</Text>
      <TextInput
        style={styles.shadowInput}
        placeholder="Complemento ou Adicionais"
        value={complementoInput}
        onChangeText={(text) => setComplementoInput(text)}
        returnKeyType="next"
      />
{/* <Button title='show' onPress={() => Toast.show({
  type: 'error',
  text1: 'Erro!',
  text2: `Erro o campo de teste está vazio!`,
})} /> */}
<EnterButton
onPress={() => handleSubmit()}
style={{marginTop: 5}}/>

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

export default CreateAdress