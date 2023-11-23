import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LocationPfp from '../assets/svg/location/pfp'
import { epilogueFont, interFont } from '../assets/fonts/fontsExport';
import { Calendar } from 'react-native-calendars';
import { useAuth } from '../utils/handleAuth';

function Location({ route, navigation }) {
    const [interLoaded] = interFont();

    const { nome,  email, disponibilidade, especialidade, cidade} = route.params;

    const [epilogueLoaded] = epilogueFont();
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
      }, [])
  
    if (!interLoaded || !epilogueLoaded) {
      return null;
    }
    
  return (
    <View className="w-screen h-screen  flex flex-col items-center pt-3">
        <LocationPfp />
        <Text style={{ fontFamily: 'InterSemiBold', fontSize: 33, marginTop: 5, textAlign: 'center'}}>{nome}</Text>
        <Text style={{fontFamily: 'InterLight', fontSize: 20, textAlign: 'center'}}>
          Disponibilidade: {disponibilidade} {'\n'}
          Especialidade: {especialidade} {'\n'}
          Cidade: {cidade}
        </Text>
        <View className="flex flex-col items-center w-96 h-16 rounded-full mt-5 mb-8" style={styles.boxShadow}>
        <Text style={{fontFamily: 'InterSemiBold', fontSize: 17, marginBottom: 5}}>
            Email para contato:
        </Text>
        <Text style={{fontFamily: 'InterBold', fontSize: 17, textDecorationStyle: 'solid'}}>
            {email}
        </Text>
        </View>
        <Calendar
  onDayPress={day => {
    console.log('selected day', day);
  }}
/>
    </View>
  )
}
const styles = StyleSheet.create({
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