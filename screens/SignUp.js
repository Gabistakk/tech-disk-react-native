import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { epilogueFont } from '../assets/fonts/fontsExport'

function SignUp() {

    const [epilogueLoaded] = epilogueFont();

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
      }}>Digite seu E-mail abaixo:</Text>
      <TextInput
        style={styles.shadowInput}
        placeholder="Email@gmail.com"
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
      height: 80,
      fontSize: 20,
      width: 300,
      margin: 12,
      padding: 10,
    },
  });

export default SignUp