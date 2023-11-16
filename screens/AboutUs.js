import { Text, View } from 'react-native'
import { epilogueFont, interFont } from '../assets/fonts/fontsExport';

function AboutUs({ navigation }) {

  const [interLoaded] = interFont();

  const [epilogueLoaded] = epilogueFont();

  if (!interLoaded || !epilogueLoaded) {
    return null;
  }

    
  return (
    <View className="h-screen w-screen flex flex-col items-center pt-14">
    <Text
        style={{
          fontFamily: "InterLight",
          color: "#23386D",
          fontSize: 30,
          marginTop: 20,
        }}
      >
        SOBRE NÓS
      </Text>

        <View className="w-screen pl-10 mt-16">
      <Text style={{fontFamily: 'EpilogueLight', fontSize: 25}}>
      A Tech Disk é um trabalho de TCC do curso de informática da FIEC. Nós escolhemos este tema na procura de um objetivo para nosso aplicativo.{'\n'}{'\n'}

Detectamos uma carência de plataformas acessíveis para a contratação de profissionais de informática, com o foco em ajudar os idodos na internet.
      </Text>
        </View>

    </View>
  )
}

export default AboutUs