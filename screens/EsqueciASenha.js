import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { interFont } from '../assets/fonts/fontsExport'
import EnterButton from '../assets/svg/login/enterButton';

function EsqueciASenha({ navigation }) {

    const [interLoaded] = interFont();

    if (!interLoaded) {
        return null;
    }

  return (
    <View className='h-screen w-screen flex flex-col items-center pt-20'>
        <Text style={{ fontFamily: 'InterLight', fontSize: 32, color: '#23386D', marginBottom: 40 }}>ESQUECI A SENHA</Text>

        <Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 35,
        fontWeight: 'bold'
      }}>Digite sua Senha abaixo:</Text>
      <TextInput
        style={styles.shadowInput}
        placeholder="Senha"
      />
      <Text style={{
        fontFamily: "InterSemiBold",
        color: "#697386",
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
      }}>Confirme sua Senha:</Text>
      <TextInput
        style={styles.shadowInput}
        placeholder="Digite a Senha Novamente"
      />
      <EnterButton style={{ marginTop: 50 }} />
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
      height: 80,
      fontSize: 20,
      width: 300,
      margin: 12,
      padding: 10,
    },
  });

export default EsqueciASenha