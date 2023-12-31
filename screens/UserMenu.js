import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { epilogueFont } from '../assets/fonts/fontsExport'
import FuncButton from '../assets/svg/userMenu/funcButton'
import ServicesButton from '../assets/svg/userMenu/servicesButton'
import { CommonActions } from '@react-navigation/native'
import { useAuth } from '../utils/handleAuth'
import ContractButton from '../assets/svg/userMenu/contractButton'

function UserMenu({ navigation }) {


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
      }
      getAuth()
    }, [])


  if(!epilogueLoaded){
    return
  }
  return (
    <View className="h-screen w-screen pt-20 flex-col items-center">
      <Text style={{ fontFamily: 'EpilogueLight', fontSize: 36, textAlign: 'center', marginBottom: 50}}>
          Selecione a Tela Desejada
      </Text>
      <View className="flex-col gap-14">
      <TouchableOpacity onPress={() => navigation.navigate('Serviços')}>
        <ServicesButton />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Funcionários')}>
        <FuncButton />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contratações')}>
        <ContractButton />
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserMenu