import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { epilogueFont } from '../assets/fonts/fontsExport'
import FuncButton from '../assets/svg/userMenu/funcButton'
import ServicesButton from '../assets/svg/userMenu/servicesButton'
import { CommonActions } from '@react-navigation/native'

function UserMenu({ navigation }) {


  const [epilogueLoaded] = epilogueFont()


  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      // Prevent default behavior of leaving the screen
      e.preventDefault()});
  }, [navigation])


  if(!epilogueLoaded){
    return
  }
  return (
    <View className="h-screen w-screen pt-20 flex-col items-center">
      <Text style={{ fontFamily: 'EpilogueLight', fontSize: 36, textAlign: 'center', marginBottom: 100}}>
          Selecione a Tela Desejada
      </Text>
      <View className="flex-col gap-14">
      <TouchableOpacity onPress={() => navigation.navigate('Serviços')}>
        <ServicesButton />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Funcionários')}>
        <FuncButton />
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserMenu