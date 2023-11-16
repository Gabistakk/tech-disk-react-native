import { Text, View } from 'react-native'
import Pen from '../../assets/svg/services/pen'
import Trash from '../../assets/svg/services/trash'
import { epilogueFont, interFont } from '../../assets/fonts/fontsExport';

function ServicesRow({ name = 'não encontrado' }) {
    const [interLoaded, epilogueLoaded] = [interFont(), epilogueFont()];

    if (!interLoaded || !epilogueLoaded) {
        return null;
    }

  return (
    <>
    <View className="w-full flex flex-row gap-7 mt-7 items-center justify-center mb-5">
          <Pen />
          <Text className="h-7 w-60 text-center overflow-hidden text-ellipsis" style={{ fontFamily: 'InterSemiBold', fontSize: 16 }}>
              {name}
          </Text>
          <Trash />
          </View>
      <View className="w-full h-5" style={{ backgroundColor: "#53389E" }}>
          </View>
    </>

  )
}

export default ServicesRow