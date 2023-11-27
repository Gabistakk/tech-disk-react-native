import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { epilogueFont } from '../assets/fonts/fontsExport'
import FuncButton from '../assets/svg/userMenu/funcButton'
import ServicesButton from '../assets/svg/userMenu/servicesButton'
import { CommonActions } from '@react-navigation/native'
import { useAuth } from '../utils/handleAuth'
import ContractButton from '../assets/svg/userMenu/contractButton'
import WorkButton from '../assets/svg/funcMenu/workButton'

function FuncMenu({ navigation }) {


  const [epilogueLoaded] = epilogueFont()


  const [authData, setAuthData] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const [isEmpregado, setIsEmpregado] = useState('')

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
    }, [])


  if(!epilogueLoaded){
    return
  }
  return (
    <View className="h-screen w-screen pt-20 flex-col items-center">
      <Text style={{ fontFamily: 'EpilogueLight', fontSize: 36, textAlign: 'center', marginBottom: 100}}>
          Selecione a Tela Desejada
      </Text>
      <View className="flex-col gap-14">
      <TouchableOpacity onPress={() => navigation.navigate('Seus Serviços')}>
        <ServicesButton />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tarefas')}>
        <WorkButton />
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default FuncMenu