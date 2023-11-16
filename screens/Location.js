import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LocationPfp from '../assets/svg/location/pfp'
import { epilogueFont, interFont } from '../assets/fonts/fontsExport';
import { Calendar } from 'react-native-calendars';

function Location({ navigation }) {
    const [interLoaded] = interFont();

    const [epilogueLoaded] = epilogueFont();
  
    if (!interLoaded || !epilogueLoaded) {
      return null;
    }
  
  return (
    <View className="w-screen h-screen  flex flex-col items-center pt-8">
        <LocationPfp />
        <Text style={{ fontFamily: 'InterSemiBold', fontSize: 33, marginTop: 5}}>Laura Santos</Text>
        <Text style={{fontFamily: 'InterExtraLight', fontSize: 24, textAlign: 'center'}}>Olá meu nome é laura sou técnica de informatica há 4 anos e trabalho ajudando os idosos!</Text>
        <View className="flex flex-col items-center w-96 h-16 rounded-full mt-5 mb-8" style={styles.boxShadow}>
        <Text style={{fontFamily: 'InterSemiBold', fontSize: 17, marginBottom: 5}}>
            Email para contato:
        </Text>
        <Text style={{fontFamily: 'InterLight', fontSize: 17}}>
            Laura@gmail.com
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