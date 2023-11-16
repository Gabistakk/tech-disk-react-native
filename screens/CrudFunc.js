import { View, Text, Button, TextInput, StyleSheet, ScrollView } from "react-native";
import { epilogueFont, interFont } from "../assets/fonts/fontsExport";
import Lupa from "../assets/svg/crudServices/lupa";
import PfpIcon from "../assets/svg/crudServices/icon";
import Tag from "../assets/svg/crudServices/tag";
import Chip from "../components/Chip";
import PfpiconW from './../assets/svg/crudServices/pfpiconW';
import CardFunc from './../components/crudFunc/CardFunc';

function CrudFunc({ navigation }) {
  const [interLoaded] = interFont();

  const [epilogueLoaded] = epilogueFont();

  if (!interLoaded || !epilogueLoaded) {
    return null;
  }

  return (
    <View className="h-full w-screen flex flex-col items-center pt-5">
      <View className="flex flex-row items-center">
        <TextInput style={styles.shadowInput} placeholder="Pesquise aqui!" />
        <Lupa />
      </View>
      <ScrollView>
      <Text
        style={{
          fontFamily: "InterBold",
          fontSize: 20,
          textAlign: "center",
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        Resultados da Pesquisa {"\n"}Funcionários
      </Text>
      <CardFunc nome='josé' compras='60' profilePicture={<PfpIcon />} />
      <CardFunc profilePicture={<PfpiconW />} nome='joana' compras='10' />
      <CardFunc />
      <CardFunc />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  shadowInput: {
    shadowColor: "#000000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 0.3,
    height: 60,
    fontSize: 20,
    width: 300,
    margin: 12,
    padding: 10,
  },
});

export default CrudFunc;
