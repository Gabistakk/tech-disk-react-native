import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { epilogueFont, interFont } from '../assets/fonts/fontsExport';
import Pen from '../assets/svg/services/pen';
import Trash from '../assets/svg/services/trash';
import ServicesRow from '../components/services/ServicesRow';
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/handleAuth';
import axios from 'axios';
import Lupa from '../assets/svg/crudFunc/lupa';

function Services({ navigation }) {

  const [interLoaded] = interFont();

  const [epilogueLoaded] = epilogueFont();
  
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  const [loaded, setLoaded] = useState(false)

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
        const res = await axios.get("http://10.0.2.2:3000/servico")
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
    <View className="mb-24 w-screen flex flex-col items-center pt-10">
       <View className="flex flex-row items-center">
        <TextInput style={styles.shadowInput}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Pesquise aqui!" />
        <Lupa />
      </View>
      <ScrollView>
    

        <View className="w-screen h-full flex flex-col items-center">
        <Text
        style={{
          fontFamily: "EpilogueRegular",
          color: "#23386D",
          fontSize: 36,
        }}
      >
        SERVIÇOS
      </Text>
      <Text style={{fontFamily: 'InterSemiBold', fontSize: 16}}>
      Seus serviços
      </Text>
      {loaded && data.filter(servico => ((servico.nome.toUpperCase().includes(search.toUpperCase())) && (servico.empregadoId == authData.id))).map(servico => {
        return(<ServicesRow key={servico.id} name={servico.nome} />)
      })}
    </View>
    </ScrollView>
    </View>
  )
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

export default Services