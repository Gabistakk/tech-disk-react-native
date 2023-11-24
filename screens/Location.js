import React, { useEffect, useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import LocationPfp from '../assets/svg/location/pfp'
import { epilogueFont, interFont } from '../assets/fonts/fontsExport';
import { useAuth } from '../utils/handleAuth';
import ContratarButton from '../assets/svg/location/contratarButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { IP } from '../utils/env';
import axios from 'axios';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { configsCalendar } from '../utils/calendarConfig';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../utils/Toast';


LocaleConfig.defaultLocale = 'pt-br'
function Location({ route, navigation }) {
    const [interLoaded] = interFont();

    const { nome,  email, disponibilidade, especialidade, cidade, id} = route.params;

    const [epilogueLoaded] = epilogueFont();
    const [isSet, setIsSet] = useState(false)
    const [authData, setAuthData] = useState('')
    const [isLogged, setIsLogged] = useState(false)
    const [isEmpregado, setIsEmpregado] = useState('')
    const [skipFirstIteration, setSkipFirstIteration] = useState(false)
    const [skipFirstIterationTwo, setSkipFirstIterationTwo] = useState(false)

    const [modalVisible, setModalVisible] = useState(false)

    const [data, setData] = useState([]);

    const [loaded, setLoaded] = useState(false)
  
    const [translateQuantity ,setTranslateQuantity] = useState(0)

    const [isSuccess, setIsSuccess] = useState(false)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items , setItems] = useState([])

    const [selectedDay, setSelectedDay] = useState('');

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

      useEffect(() => {
        objectToAppend = []
        if(skipFirstIteration == false){
          setSkipFirstIteration(true)
        }
        else{
          data.map(servico => {objectToAppend.push({label: servico.nome, value: servico.id})})
          setItems(objectToAppend)
        }
      }, [loaded])
  


      const getData = async () => {
        try {
          const res = await axios.get(`http://${IP}:3000/servico/empregado`, {
            id: id
          })
          setData(res.data)
          setLoaded(true)
        }
        catch(err){
          console.error(err.message)
        }
      }


      const handleSubmit = async () => {
        if(selectedDay == '' || value == ''){
          setIsSuccess(false)
          Toast.show({
            type: 'error',
            text1: 'Erro.',
            text2: 'Selecione um serviço e Data.'
          })
        }
        else{
          try{
            const res = await axios.post(`http://${IP}:3000/ordem-servico`,{
            servicoId: value,
            clienteId: authData.id,
            empregadoId: id,
            data: formatDate(selectedDay)
            }
            )
            setModalVisible(false)
            setIsSuccess(true)
            Toast.show({
              type: 'success',
              text1: 'Sucesso!',
              text2: `Serviço Agendado para o dia ${formatDate(selectedDay)}`
            })
          }
          catch(err){
            console.error(err)
          }
        }
      }

    function formatDate(date){
      var date = date.split('-')
      var year = date[0]
      var month = date[1]
      var day = date[2]
      return(`${day}/${month}/${year}`)
    }
    if (!interLoaded || !epilogueLoaded) {
      return null;
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

    
  return (
    <View className="w-screen h-screen  flex flex-col items-center pt-20">
        <LocationPfp />
        <Text style={{ fontFamily: 'InterSemiBold', fontSize: 33, marginTop: 5, textAlign: 'center'}}>{nome}</Text>
        <Text style={{fontFamily: 'InterLight', fontSize: 20, textAlign: 'center'}}>
          Disponibilidade: {disponibilidade} {'\n'}
          Especialidade: {especialidade} {'\n'}
          Cidade: {cidade}
        </Text>
        <View className="flex flex-col items-center w-96 h-16 rounded-full mt-5 mb-8" style={styles.boxShadow}>
        <Text style={{fontFamily: 'InterSemiBold', fontSize: 17, marginBottom: 6}}>
            Email para contato:
        </Text>
        <Text style={{fontFamily: 'InterBold', fontSize: 17, textDecorationStyle: 'solid'}}>
          {email}
        </Text>
        <View className="mb-20">
        </View>
        <Pressable onPress={() => setModalVisible(true)}>
        <ContratarButton />
        </Pressable>


        <Modal
        elevation={5}
        style={{ elevation: 5}}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>


          <Text className="text-3xl mb-3">Selecione o Serviço!</Text>
        {loaded && <DropDownPicker open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        language='PT'
        style={{ fontSize: 50 }}
        textStyle={{fontSize: 25}}
        />}
        <Text className="text-3xl mb-3 mt-3 text-center">Selecione uma data:</Text>

        <Calendar
        onDayPress={day => {
          setSelectedDay(day.dateString);
        }}
        
        markedDates={{
          [selectedDay]: {selected: true, selectedDotColor: 'orange'}
        }}
        theme={{
          backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#4B2785',
        selectedDayBackgroundColor: '#4B2785',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#4B2785',
        dayTextColor: '#2d4150',
        arrowColor: '#4B2785'
        }}
         />
        <View className="flex flex-row items-center gap-5">
          
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonConfirm]}
              onPress={() => {handleSubmit()}}>
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
            {!isSuccess && <Toast
        config={toastConfig}
        position='top'
        topOffset={-150}
      />}
        </View>
          </View>
        </View>
      </Modal>
        </View>
        {isSuccess && <Toast
        config={toastConfig}
        position='bottom'
        bottomOffset={150}
      />}
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
    height: 70,
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
    height: 650,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
    fontSize: 25
  },
  modalText: {
    textAlign: 'center',
  },
  boxShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
    Width: 350,
    borderRadius: 20.0,
    backgroundColor: '#8254CD'
  },
});

export default Location