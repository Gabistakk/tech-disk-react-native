import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { interFont } from '../../assets/fonts/fontsExport'
import ContractsChip from './ContractsChip';

function CardContracts( { servico = 'indisponivel', nomeDoEmpregado = 'indisponivel', data = 'indisponivel', garantia = 'indisponivel', bairro = 'indisponivel', rua = 'indisponivel', numero = 'indisponivel' }) {

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
          <ContractsChip text={servico} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Nome do Técnico:</Text>
          <ContractsChip text={nomeDoEmpregado} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Garantia:</Text>
          <ContractsChip text={garantia} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Data:</Text>
          <ContractsChip text={data} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white mb-3">Endereço</Text>
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Bairro:</Text>
          <ContractsChip text={bairro} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Rua:</Text>
          <ContractsChip text={rua.substring(0, 30) + '...'} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Número:</Text>
          <ContractsChip text={numero} />
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
export default CardContracts