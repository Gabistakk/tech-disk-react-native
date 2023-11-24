import { useNavigation } from "@react-navigation/native";
import { interFont } from "../assets/fonts/fontsExport";
import HeaderLogo from "../assets/svg/home/headerLogo";
import * as RootNavigation from './RootNavigation';
import { storeData } from "./cacheStorageManager";


async function handleLogOff(){
  await storeData(null, null, null, null)
  RootNavigation.navigate('Login')
}

export function headerStyle(){

  const [interLoaded] = interFont();

  if(!interLoaded){
    return null;
  }
  return (
    {
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
      headerRight: () => <HeaderLogo onPress={() => handleLogOff()} />,
    }
    )

  }


  export function loginHeaderStyle(){

    const [interLoaded] = interFont();
  
    if(!interLoaded){
      return null;
    }
    return (
      {
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
        headerRight: () => <HeaderLogo onPress={() => handleLogOff()} />,
  headerLeft: () => <></>

      }
      )
  
    }
