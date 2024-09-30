import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Iniciar from "./Iniciar";
import Entrar from "./Entrar";
import Cadastrar from "./Cadastrar";
import Home from "./Home";
import ChatSuporte from "./ChatSuporte";
import Conta from "./Conta";
import AddCultura from "./AddCultura";

const Stack = createStackNavigator();

function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Iniciar");
    }, 2000); // 2 segundos
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logotipo_econecta_341x98.png")}
        style={styles.imagem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Iniciar"
          component={Iniciar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Entrar"
          component={Entrar}
          options={{ headerShown: false }} // Define o título da tela "Entrar"
        />

        <Stack.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{ title: "Cadastrar" }} // Define o título da tela "Cadastrar"
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }} // Define o título da tela "Home"
        />
        <Stack.Screen
          name="ChatSuporte"
          component={Home}
          options={{ title: "ChatSuporte" }} // Define o título da tela "Suporte"
        />
        <Stack.Screen
          name="Conta"
          component={Home}
          options={{ title: "Conta" }} // Define o título da tela "Conta"
        />
        <Stack.Screen
          name="AddCultura"
          component={Home}
          options={{ title: "AddCultura" }} // Define o título da tela "Conta"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#364b56",
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: 280,
    height: 70,
  },
});
