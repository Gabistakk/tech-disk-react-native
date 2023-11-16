import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { epilogueFont, interFont } from "../assets/fonts/fontsExport";
import EsqueciButton from "../assets/svg/login/esqueciButton";
import EnterButton from "../assets/svg/login/enterButton";
import SignUpButton from "../assets/svg/login/signUpButton";

function Login({ navigation }) {
  
  const [interLoaded, epilogueLoaded] = [interFont(), epilogueFont()];

  if (!interLoaded || !epilogueLoaded) {
    return null;
  }

  return (
    <View className="h-screen w-screen flex flex-col items-center pt-5">
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
        marginTop: 35,
        fontWeight: 'bold'
      }}>Digite seu E-mail abaixo:</Text>
      <TextInput
        style={styles.shadowInput}
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
        placeholder="Senha"
      />
      <EsqueciButton style={{ marginTop: -5, marginBottom: 45 }} onPress={() => navigation.navigate('Esqueci a Senha')}/>
      <View className="flex flex-col h-1/6 gap-7 items-center justify-center">
      <EnterButton />
      <SignUpButton onPress={() => navigation.navigate('Cadastro')} />
      </View>
    </View>
  );
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

export default Login;
