import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import PfpIcon from '../../assets/svg/crudFunc/icon'
import Chip from '../Chip'
import axios from 'axios'

function CardFunc( { nome, especialidade, disponibilidade, profilePicture }) {

    
  return (
    <View
        className="flex flex-row items-center pl-10 pt-5 pb-5 mb-10"
        style={styles.boxShadow}
      >
        {(profilePicture) ? profilePicture : <PfpIcon />}
        <View className="flex flex-col ml-4">
          <Chip text={nome} />
          <Chip text={especialidade} />
          <Chip text={disponibilidade} />
        </View>
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
export default CardFunc