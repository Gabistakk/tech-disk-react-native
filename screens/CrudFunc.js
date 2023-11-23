import { View, Text, Button, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { epilogueFont, interFont } from "../assets/fonts/fontsExport";
import Lupa from "../assets/svg/crudFunc/lupa";
import CardFunc from "../components/crudFunc/CardFunc";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../utils/handleAuth";



function CrudFunc({ navigation }) {
  const [interLoaded] = interFont();

  const [epilogueLoaded] = epilogueFont();

  const [data, setData] = useState([]);

  const [loaded, setLoaded] = useState(false)

  const [search, setSearch] = useState('')

  const [isSet, setIsSet] = useState(false)
  const [authData, setAuthData] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const [isEmpregado, setIsEmpregado] = useState('')

    useEffect(() => {
      async function getAuth(){
        const [returnAuthData, authIsLogged, authIsEmpregado] = await useAuth();
        setAuthData(returnAuthData)
        setIsLogged(authIsLogged)
        setIsEmpregado(authIsEmpregado)
      }
      getAuth()
      getData()
    }, [])
  const getData = async () => {
    try {
      const res = await axios.get("http://10.0.2.2:3000/empregado")
      setData(res.data)
      setLoaded(true)
    }
    catch(err){
      console.log(err.message)
    }
  }


  if (!interLoaded || !epilogueLoaded) {
    return null;
  }

  return (
    <View className="h-full w-screen flex flex-col items-center pt-5">
      <View className="flex flex-row items-center">
        <TextInput style={styles.shadowInput}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Pesquise aqui!" />
        <Lupa />
      </View>
      <ScrollView>
      <Text
        style={{
          fontFamily: "InterBold",
          fontSize: 20,
          textAlign: "center",
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        Resultados da Pesquisa {"\n"}Funcionários
      </Text>
      {loaded && data.filter(funcionario => (funcionario.nome.toUpperCase().includes(search.toUpperCase())) || funcionario.especialidade.toUpperCase().includes(search.toUpperCase())).map(funcionario => {
        return(
          <TouchableOpacity
          onPress={() => navigation.navigate('Localização', {
            nome: funcionario.nome,
            email: funcionario.email,
            disponibilidade: funcionario.disponibilidade,
            especialidade: funcionario.especialidade,
            cidade: funcionario.endereco.cidade
          })}>
            <CardFunc key={funcionario.id} nome={funcionario.nome.split(" ")[0] + " " + funcionario.nome.split(" ")[1]} especialidade={funcionario.especialidade} disponibilidade={funcionario.disponibilidade} 
            />
          </TouchableOpacity>
        )
      })}
      <CardFunc />
      <CardFunc />
      <CardFunc />
      <CardFunc />
      <CardFunc />
      </ScrollView>
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
    height: 60,
    fontSize: 20,
    width: 300,
    margin: 12,
    padding: 10,
  },
});

export default CrudFunc;
