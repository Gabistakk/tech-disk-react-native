import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { epilogueFont, interFont } from "../assets/fonts/fontsExport";
import EsqueciButton from "../assets/svg/login/esqueciButton";
import EnterButton from "../assets/svg/login/enterButton";
import SignUpButton from "../assets/svg/login/signUpButton";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { toastConfig } from "../utils/Toast";
import axios from "axios";
import { retrieveData, storeData } from "../utils/cacheStorageManager";
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import { useAuth } from "../utils/handleAuth";


function Login({ navigation }) {

  const [interLoaded] = interFont();

  const [epilogueLoaded] = epilogueFont();

  const [emailInput, setEmailInput] = useState('')

  const [senhaInput, setSenhaInput] = useState('')

  const [errorMessage, setErrorMessage] = useState('');

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    async function getAuth() {
      const [data, isLogged, isEmpregado] = await useAuth();
      if (isLogged) {
        if (isEmpregado) {
          navigation.navigate('Serviços')
          return
        }
        navigation.navigate('Crud Funcionários')
      }
    }
    getAuth()
  }, [])


  if (!interLoaded || !epilogueLoaded) {
    return null;
  }

  function deleteInputs() {
    setEmailInput('')
    setSenhaInput('')
  }

  function checkInputs() {
    if (senhaInput == '') { setErrorMessage("Senha") }
    if (emailInput == '') { setErrorMessage("Email") }
    return !(emailInput == '' || senhaInput == '')
  }


  function handleSubmit() {
    if (checkInputs()) {
      if (isSelected == false) {
        axios.post('http://10.0.2.2:3000/login/cliente', {
          email: emailInput,
          senha: senhaInput,
        }).then((response) => {
          if (response.data != '') {
            navigation.navigate('Crud Funcionários')
            storeData(response.data.email, response.data.senha, response.data.id, false)
            deleteInputs()
          }
          else {
            Toast.show({
              type: 'error',
              text1: 'Erro!',
              text2: `Email ou senha incorretos.`,
              visibilityTime: 15000,
            })
          }
        })
      }
      if(isSelected == true) {
        axios.post('http://10.0.2.2:3000/login/empregado', {
          email: emailInput,
          senha: senhaInput,
        }).then((response) => {
          if (response.data != '') {
            navigation.navigate('Serviços')
            storeData(response.data.email, response.data.senha, response.data.id, true)
            deleteInputs()
          }
          else {
            Toast.show({
              type: 'error',
              text1: 'Erro!',
              text2: `Email ou senha incorretos.`,
              visibilityTime: 15000,
            })
          }
        })
      }
    }
    else {
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: `Erro o campo de ${errorMessage} está vazio!`,
        visibilityTime: 15000,
      })
    }
  }


  return (
    <View className="h-screen w-screen flex flex-col items-center pt-1">
      <View className="w-2/3 text-center items-center flex justify-center">
        <Text
          style={{
            fontFamily: "InterSemiBold",
            fontSize: 30,
            color: "#34567E",
          }}
        >
          BEM VINDO{"\n"}A TECH DISK!
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "EpilogueRegular",
          color: "#23386D",
          fontSize: 20,
          marginTop: 20,
        }}
      >
        FAÇA SEU LOGIN PARA RECEBER AJUDA!
      </Text>

      <Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
      }}>Digite seu E-mail abaixo:</Text>
      <TextInput
        style={styles.shadowInput}
        value={emailInput}
        onChangeText={(text) => setEmailInput(text)}
        placeholder="Email@gmail.com"
      />

      <Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        fontWeight: 'bold'
      }}>Digite sua Senha abaixo:</Text>
      <TextInput
        style={styles.shadowInput}
        value={senhaInput}
        onChangeText={(text) => setSenhaInput(text)}
        placeholder="Senha"
      />
      <CircleCheckBox
        checked={isSelected}
        onToggle={() => setIsSelected(!isSelected)}
        labelPosition={LABEL_POSITION.RIGHT}
        label="Selecione para logar como Funcionário"
        styleLabel={{ fontFamily: 'InterSemiBold', fontSize: 15 }}
      />
      <EsqueciButton style={{ marginTop: 10, marginBottom: 45 }} onPress={() => navigation.navigate('Esqueci a Senha')} />
      <View className="flex flex-col h-1/6 gap-7 items-center justify-center">
        <EnterButton onPress={() => handleSubmit()} />
        <SignUpButton onPress={() => navigation.navigate('Cadastro')} />
      </View>
      <Toast
        config={toastConfig}
        position='bottom'
        bottomOffset={150}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  shadowInput: {
    shadowColor: "#000000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 0.3,
    height: 80,
    fontSize: 20,
    width: 300,
    margin: 12,
    padding: 10,
  },
});

export default Login;
