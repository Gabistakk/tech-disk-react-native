import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import headerStyle from "./components/headerStyle";
import Login from "./screens/Login";
import EsqueciASenha from "./screens/EsqueciASenha";
import SignUp from "./screens/SignUp";
import AboutUs from "./screens/AboutUs";
import { navigationRef } from './utils/RootNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} /* options={headerStyle()} */ options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={headerStyle()} />
        <Stack.Screen name="Esqueci a Senha" component={EsqueciASenha} options={headerStyle()} />
        <Stack.Screen name="Cadastro" component={SignUp} options={headerStyle()} />
        <Stack.Screen name="SobreNos" component={AboutUs} options={headerStyle()} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
