import React from 'react'
import { Button, View } from 'react-native'

function ShowCaseScreen({ navigation }) {
  return (
    <View className="h-screen w-screen flex flex-col">
        <View className="h-5"></View>
        <Button title='Home' onPress={() => navigation.navigate('Home')} />
        <View className="h-5"></View>
        <Button title='Login' onPress={() => navigation.navigate('Login')} />
        <View className="h-5"></View>

        <Button title='Esqueci a Senha' onPress={() => navigation.navigate('Esqueci a Senha')} />
        <View className="h-5"></View>

        <Button title='Cadastro' onPress={() => navigation.navigate('Cadastro')} />
        <View className="h-5"></View>
        <Button title='Sobre Nós' onPress={() => navigation.navigate('Sobre Nós')} />
        <View className="h-5"></View>
        <Button title='Seus Serviços' onPress={() => navigation.navigate('Seus Serviços')} />
        <View className="h-5"></View>
        <Button title='Serviços' onPress={() => navigation.navigate('Serviços')} />
        <View className="h-5"></View>
        <Button title='Funcionários' onPress={() => navigation.navigate('Funcionários')} />
        <View className="h-5"></View>
        <Button title='Menu de Usuário' onPress={() => navigation.navigate('Menu de Usuário')} />
    </View>
  )
}

export default ShowCaseScreen