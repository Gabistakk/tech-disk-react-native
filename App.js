import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import EsqueciASenha from "./screens/EsqueciASenha";
import SignUp from "./screens/SignUp";
import AboutUs from "./screens/AboutUs";
import { navigationRef } from './utils/RootNavigation';
import Services from "./screens/Services";

import Location from "./screens/Location";
import ShowCaseScreen from "./screens/ShowCaseScreen";
import CrudFunc from "./screens/CrudFunc";
import CrudServices from "./screens/CrudServices";

import { headerStyle, loginHeaderStyle } from "./utils/headerStyle";
import UserMenu from "./screens/UserMenu";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="ShowCase">
        <Stack.Screen name="Home" component={Home} /* options={headerStyle()} */ options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={loginHeaderStyle()} />
        <Stack.Screen name="Esqueci a Senha" component={EsqueciASenha} options={headerStyle()} />
        <Stack.Screen name="Cadastro" component={SignUp} options={headerStyle()} />
        <Stack.Screen name="Sobre Nós" component={AboutUs} options={headerStyle()} />
        <Stack.Screen name="Seus Serviços" component={Services} options={headerStyle()} />
        <Stack.Screen name="Serviços" component={CrudServices} options={headerStyle()} />
        <Stack.Screen name="Funcionários" component={CrudFunc} options={headerStyle()} />
        <Stack.Screen name="Localização" component={Location} options={headerStyle()} />
        <Stack.Screen name="ShowCase" component={ShowCaseScreen} options={headerStyle()} />
        <Stack.Screen name="Menu de Usuário" component={UserMenu} options={loginHeaderStyle()} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
