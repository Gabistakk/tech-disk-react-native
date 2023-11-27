import { ScrollView, StyleSheet, Text, TextInput, View, RefreshControl, Modal, Pressable, Touchable, TouchableOpacity, Keyboard } from 'react-native'
import { epilogueFont, interFont } from '../assets/fonts/fontsExport';
import Pen from '../assets/svg/services/pen';
import Trash from '../assets/svg/services/trash';
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../utils/handleAuth';
import axios from 'axios';
import Lupa from '../assets/svg/crudFunc/lupa';
import Plus from '../assets/svg/services/plus';
import { IP } from '../utils/env';

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

  const [changed, setChanged] = useState(0)

  const [refreshing, setRefreshing] = useState(false)

  const [modalVisible, setModalVisible] = useState(false);

  const [addModalVisible, setAddModalVisible] = useState(false);
  
  const [idToChange, setIdToChange] = useState('')
  
  const [skipFirstIteration, setSkipFirstIteration] = useState(false)
  

  const [changeName, setChangeName] = useState('')
  const [changeGarantia, setChangeGarantia] = useState('')
  const [changeContrato, setChangeContrato] = useState('')
  const [changeRecursos, setChangeRecursos] = useState('')
  const [changeObjetivo, setChangeObjetivo] = useState('')
  const [changeTermos, setChangeTermos] = useState('')


  const [addNome, setAddNome] = useState('')
  const [addGarantia, setAddGarantia] = useState('')
  const [addContrato, setAddContrato] = useState('')
  const [addRecursos, setAddRecursos] = useState('')
  const [addObjetivo, setAddObjetivo] = useState('')
  const [addTermos, setAddTermos] = useState('')
  const [addEmpregadoId, setEmpregadoId] = useState('')

  const [translateQuantity, setTranslateQuantity] = useState(0)


    useEffect(() => {
      async function getAuth(){
        const [returnAuthData, authIsLogged, authIsEmpregado] = await useAuth();
        setAuthData(returnAuthData)
        setIsLogged(authIsLogged)
        setIsEmpregado(authIsEmpregado)
        if(authIsEmpregado == false){
          navigation.navigate('Menu de Usuário')
        }
      }
      getAuth()
      getData()
    }, [])

    useEffect(() => {
      setTranslateQuantity(0);
    }, [addModalVisible, modalVisible])

    useEffect(() => {
      if(skipFirstIteration == false){
        setSkipFirstIteration(true)
      }
      else{
        setModalVisible(true)
      }
    }, [changeName])


    Keyboard.addListener('keyboardDidHide', () => {
      setTranslateQuantity(0);
    })


    const getData = async () => {
      setRefreshing(true)
      try {
        const res = await axios.get(`http://${IP}:3000/servico`)
        setData(res.data)
        setLoaded(true)
      }
      catch(err){
        console.error(err.message)
      }
      setRefreshing(false)

    }
    

    const handleDelete = async (deleteId) => {
      try{
        const res = await axios.delete(`http://${IP}:3000/servico/${deleteId}`)
        getData()
      }
      catch(error){
        console.error(error)
      }
    }
    

    onFocusAnimation = async (input) => {
      if(input == 'nome'){
        setTranslateQuantity(150)
      }

      if(input == 'garantia'){
        setTranslateQuantity(150)
      }
      if(input == 'contrato'){
        setTranslateQuantity(0)
      }

      if(input == 'recursos'){
        setTranslateQuantity(-50)
      }

      if(input == 'objetivo'){
        setTranslateQuantity(-150)
      }

      if(input == 'termos'){
        setTranslateQuantity(-150)
      }
    }

    const handleChange = async () => {
      if(changeName != ''){
        try{
          const res = await axios.patch(`http://${IP}:3000/servico/${idToChange}`, {
            nome: changeName,
            garantia: changeGarantia,
            detalhesContrato: changeContrato,
            recursos: changeRecursos,
            termosCondicoes: changeTermos,
            objetivo: changeObjetivo
          })
          setModalVisible(false)
          getData()
        }
        catch(error){
          console.error(error)
        }
      }
    }

    const handleAdd = async () => {
      if(addNome != '' && addGarantia != '' && addContrato != '' && addRecursos != '' && addTermos != '' && addObjetivo != ''){
        try{
          const res = await axios.post(`http://${IP}:3000/servico`, {
            nome: addNome,
            garantia: addGarantia,
            detalhesContrato: addContrato,
            recursos: addRecursos,
            termosCondicoes: addTermos,
            objetivo: addObjetivo,
            empregadoId: authData.id
          })
          setAddModalVisible(false)
          getData()
          clearAddInputs()
        }
        catch(error){
          console.error(error)
        }
      }
    }

    const clearAddInputs = () => {
      setAddNome('')
      setAddContrato('')
      setAddGarantia('')
      setAddObjetivo('')
      setAddRecursos('')
      setAddTermos('')
    }

    const handleChangeClick = (nome, garantia, contrato, recursos, objetivo, termos, id) => {
      setChangeName(nome)
      setChangeGarantia(garantia)
      setChangeContrato(contrato)
      setChangeRecursos(recursos)
      setChangeObjetivo(objetivo)
      setChangeTermos(termos)
      setIdToChange(id)
    }

  if (!interLoaded || !epilogueLoaded) {
    return null;
  }

  return (
    <View className="mb-40 w-screen flex flex-col items-center pt-10">
       <View className="flex flex-row items-center">
        <TextInput style={styles.shadowInput}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Pesquise aqui!" />
        <Lupa />
      </View>
        <Text
        style={{
          fontFamily: "EpilogueRegular",
          color: "#23386D",
          fontSize: 36,
        }}
      >
        SERVIÇOS
      </Text>
      <TouchableOpacity onPress={() => setAddModalVisible(true)} className="absolute right-5 top-32">
      <Plus  />
      </TouchableOpacity>
      <Text style={{fontFamily: 'InterSemiBold', fontSize: 16}}>
      Seus serviços
      </Text>
      <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getData} />}
      >
        <View className="w-screen h-full flex flex-col items-center">
      
      {loaded && data.filter(servico => ((servico.nome.toUpperCase().includes(search.toUpperCase())) && (servico.empregadoId == authData.id && isEmpregado))).map(servico => {
        return(
          <>
          <View className="w-full flex flex-row gap-7 mt-7 items-center justify-center mb-5">
          <Pen onPress={() => handleChangeClick(servico.nome, servico.garantia, servico.detalhesContrato, servico.recursos, servico.objetivo, servico.termosCondicoes, servico.id)} />
          <Text className="h-7 w-60 text-center overflow-hidden text-ellipsis" style={{ fontFamily: 'InterSemiBold', fontSize: 16 }}>
              {servico.nome}
          </Text>
          <Trash onPress={() => {handleDelete(servico.id)}} />
          </View>
      <View className="w-full h-5" style={{ backgroundColor: "#53389E" }}>
          </View>
          </>
          )
      })}
    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
          <View style={[styles.modalView, { transform: [{translateY: translateQuantity}]}]}>

            <Text className="text-xl">Nome:</Text>
            <TextInput style={styles.shadowInput}
        value={changeName}
        onChangeText={(text) => setChangeName(text)}
        onFocus={() => onFocusAnimation('nome')}
        placeholder="Digite o Nome" />


        <Text className="text-xl">Garantia:</Text>
            <TextInput style={styles.shadowInput}
        value={changeGarantia}
        onChangeText={(text) => setChangeGarantia(text)}
        onFocus={() => onFocusAnimation('garantia')}
        placeholder="Digite a Garantia" />


        <Text className="text-xl">Detalhes Contrato:</Text>
            <TextInput style={styles.shadowInput}
        value={changeContrato}
        onChangeText={(text) => setChangeContrato(text)}
        onFocus={() => onFocusAnimation('contrato')}
        placeholder="Digite os Detalhes do Contrato" />


        <Text className="text-xl">Recursos:</Text>
            <TextInput style={styles.shadowInput}
        value={changeRecursos}
        onChangeText={(text) => setChangeRecursos(text)}
        onFocus={() => onFocusAnimation('recursos')}
        placeholder="Digite os Recursos" />


        <Text className="text-xl">Objetivo:</Text>
            <TextInput style={styles.shadowInput}
        value={changeObjetivo}
        onChangeText={(text) => setChangeObjetivo(text)}
        onFocus={() => onFocusAnimation('objetivo')}
        placeholder="Digite o Objetivo" />


        <Text className="text-xl">Termos e Condições:</Text>
            <TextInput style={styles.shadowInput}
        value={changeTermos}
        onChangeText={(text) => setChangeTermos(text)}
        onFocus={() => onFocusAnimation('termos')}
        placeholder="Digite os Termos e Condições" />


        <View className="flex flex-row items-center gap-5">
          
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonConfirm]}
              onPress={() => handleChange()}>
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
        </View>
          </View>
        </View>
      </Modal>








      <Modal
        animationType="slide"
        transparent={true}
        visible={addModalVisible}
        onRequestClose={() => {
          setAddModalVisible(!addModalVisible);
        }}>
          <View style={styles.centeredView}>
          <View style={[styles.modalView, { transform: [{translateY: translateQuantity}]}]}>
            <Text className="text-xl">Nome:</Text>
            <TextInput style={styles.shadowInput}
        value={addNome}
        onChangeText={(text) => setAddNome(text)}
        onFocus={() => onFocusAnimation('nome')}
        placeholder="Digite o Nome" />


        <Text className="text-xl">Garantia:</Text>
            <TextInput style={styles.shadowInput}
        value={addGarantia}
        onChangeText={(text) => setAddGarantia(text)}
        onFocus={() => onFocusAnimation('garantia')}
        placeholder="Digite a Garantia" />


        <Text className="text-xl">Detalhes Contrato:</Text>
            <TextInput style={styles.shadowInput}
        value={addContrato}
        onChangeText={(text) => setAddContrato(text)}
        onFocus={() => onFocusAnimation('contrato')}
        placeholder="Digite os Detalhes do Contrato" />


        <Text className="text-xl">Recursos:</Text>
            <TextInput style={styles.shadowInput}
        value={addRecursos}
        onChangeText={(text) => setAddRecursos(text)}
        onFocus={() => onFocusAnimation('recursos')}
        placeholder="Digite os Recursos" />


        <Text className="text-xl">Objetivo:</Text>
            <TextInput style={styles.shadowInput}
        value={addObjetivo}
        onChangeText={(text) => setAddObjetivo(text)}
        onFocus={() => onFocusAnimation('objetivo')}
        placeholder="Digite o Objetivo" />


        <Text className="text-xl">Termos e Condições:</Text>
            <TextInput style={styles.shadowInput}
        value={addTermos}
        onChangeText={(text) => setAddTermos(text)}
        onFocus={() => onFocusAnimation('termos')}
        placeholder="Digite os Termos e Condições" />


        <View className="flex flex-row items-center gap-5">
          
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setAddModalVisible(!addModalVisible)}>
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonConfirm]}
              onPress={() => handleAdd()}>
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
        </View>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 350,
    height: 800
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#DD0004',
  },
  buttonConfirm: {
    backgroundColor: '#53389E',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
  },
});

export default Services