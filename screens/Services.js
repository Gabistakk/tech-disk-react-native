import { ScrollView, Text, View } from 'react-native'
import { epilogueFont, interFont } from '../assets/fonts/fontsExport';
import Pen from '../assets/svg/services/pen';
import Trash from '../assets/svg/services/trash';
import ServicesRow from '../components/services/ServicesRow';
import { useEffect } from 'react';
import { useAuth } from '../utils/handleAuth';

function Services({ navigation }) {

    const [interLoaded] = interFont();

  const [epilogueLoaded] = epilogueFont();
  
    useEffect(() => {
      async function getAuth(){await useAuth()}
      getAuth()
    }, [])

  if (!interLoaded || !epilogueLoaded) {
    return null;
  }

  return (
    <ScrollView>
    <View className="h-full mb-10 w-screen flex flex-col items-center pt-10">
    <Text
        style={{
          fontFamily: "EpilogueRegular",
          color: "#23386D",
          fontSize: 36,
        }}
      >
        SERVIÇOS
      </Text>

        <View className="w-screen h-full mt-6 flex flex-col items-center">
      <Text style={{fontFamily: 'InterSemiBold', fontSize: 16}}>
      Tipos de serviços
      </Text>
      <ServicesRow name="Formatação" />
      <ServicesRow name="Limpeza" />
      <ServicesRow name="Antivirus" />
      <ServicesRow name="Antivirus" />
      <ServicesRow name="Antivirus" />
      <ServicesRow name="Antivirus" />
      <ServicesRow name="Antivirus" />
      <ServicesRow name="Antivirus" />
      <ServicesRow name="Antivirus" />
      <ServicesRow name="Antivirus" />
      <ServicesRow name="Antivirus" />
      <ServicesRow />
    </View>
        </View>
    </ScrollView>
  )
}

export default Services