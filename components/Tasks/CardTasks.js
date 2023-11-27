import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { interFont } from '../../assets/fonts/fontsExport'
import TasksChip from './TasksChip';

function CardTasks( { servico = 'indisponivel', nomeDoCliente = 'indisponivel', data = 'indisponivel', bairro = 'indisponivel', rua = 'indisponivel', numero = 'indisponivel' }) {

  const [interLoaded] = interFont();

  if(!interLoaded){
    return null
  }

  return (
    <View
        className="flex flex-col items-center justify-center mb-10"
        style={styles.boxShadow}
      >
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Serviço:</Text>
          <TasksChip text={servico} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Nome do Cliente:</Text>
          <TasksChip text={nomeDoCliente} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Data:</Text>
          <TasksChip text={data} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white mb-3">Endereço</Text>
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Bairro:</Text>
          <TasksChip text={bairro} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Rua:</Text>
          <TasksChip text={rua.substring(0, 30) + '...'} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Número:</Text>
          <TasksChip text={numero} />
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
        minHeight: 200,
        minWidth: 350,
        borderRadius: 20.0,
        backgroundColor: "#4B2785",
      },
});
export default CardTasks