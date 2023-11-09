import { interFont } from "../assets/fonts/fontsExport";
import HeaderLogo from "../assets/svg/home/headerLogo";

export default function headerStyle() {
  const [interLoaded] = interFont();

  if (!interLoaded) {
    return null;
  }



  return {
    headerTitleAlign: "center",
    headerLargeTitleShadowVisible: true,
    headerShadowVisible: true,
    headerTintColor: "#ffffff",
    headerStyle: {
      backgroundColor: "#4B2785",
    },
    headerTitleStyle: {
      color: "#ffffff",
      fontSize: 25,
      fontFamily: "InterBold",
    },
    headerRight: () => <HeaderLogo />,
  };
}
