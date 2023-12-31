import { View, Text, Button, TextInput, StyleSheet, ScrollView } from "react-native";
import { epilogueFont, interFont } from "../assets/fonts/fontsExport";
import Lupa from "../assets/svg/crudFunc/lupa";
import CardServices from '../components/crudServices/CardServices';
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../utils/handleAuth";
import { IP } from "../utils/env";
import CardTasks from "../components/Tasks/CardTasks";
import CardContracts from "../components/Contracts/CardContracts";

function Contracts({ navigation }) {
  const [interLoaded] = interFont();

  const [epilogueLoaded] = epilogueFont();

  const [data, setData] = useState([])

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
        if(authIsEmpregado == true){
            navigation.navigate('Tarefas')
        }
      }
      getAuth()
      getData()
    }, [])
  const getData = async () => {
    try {
      const res = await axios.get(`http://${IP}:3000/ordem-servico`)
      setData(res.data)
      setLoaded(true)
    }
    catch(err){
      console.error(err.message)
    }
  }

  if (!interLoaded || !epilogueLoaded) {
    return null;
  }

  return (
    <View className="h-full w-screen flex flex-col items-center pt-5">
      <View className="flex flex-row items-center">
        <TextInput style={styles.shadowInput} value={search} onChangeText={(text) => setSearch(text)} placeholder="Pesquise aqui!" />
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
        Suas Tarefas: 
      </Text>
      
      {loaded && data.filter(ordem => (((ordem.servico.nome.toUpperCase().includes(search.toUpperCase())) || (ordem.cliente.nome.toUpperCase().includes(search.toUpperCase()))) && (ordem.cliente.id == authData.id && isEmpregado == false))).map(ordem => {
        return(
          <CardContracts key={ordem.id}
          servico={ordem.servico.nome}
          nomeDoEmpregado={ordem.empregado.nome}
          garantia={ordem.servico.garantia}
          data={ordem.data}
          bairro={ordem.cliente.endereco.bairro}
          rua={ordem.cliente.endereco.rua}
          numero={ordem.cliente.endereco.numero}
          />
        )
      })}
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

export default Contracts;
