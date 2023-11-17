import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ServicesChip from './servicesChip'
import { interFont } from '../../assets/fonts/fontsExport'

function CardServices( { nome, garantia, detalhes }) {

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
          <ServicesChip text={nome} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Detalhes:</Text>
          <ServicesChip text={detalhes} />
          <Text style={{fontFamily: 'InterSemiBold', fontSize: 20}} className="text-white">Tempo de Garantia:</Text>
          <ServicesChip text={garantia} />
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
export default CardServices