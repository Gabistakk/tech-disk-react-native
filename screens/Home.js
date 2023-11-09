import { Text, View } from "react-native";
import { epilogueFont } from "../assets/fonts/fontsExport.js";
import HomeLogo from "../assets/svg/home/homeLogo.js";
import HomeButton from "../assets/svg/home/homeButton.js";
import { StyleSheet } from "react-native";

function Home({ navigation }) {
  const [epilogueLoaded] = epilogueFont();

  if (!epilogueLoaded) {
    return null;
  }

  return (
    <View className=" h-screen w-screen flex flex-col items-center pt-10 justify-start">
      <View className="mb-20 mt-10">
        <HomeLogo />
      </View>
      <Text
        style={{ fontFamily: "EpilogueRegular" }}
        className="text-3xl opacity-75 mb-10"
      >
        CLIQUE ABAIXO!
      </Text>
      <HomeButton onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 5,
    // background color must be set
    backgroundColor: "#0000", // invisible color
  },
});
