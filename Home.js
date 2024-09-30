import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import BotaoCustomizado from "./BotaoCustomizado";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

export default function Entrar() {
  const navigation = useNavigation();

  // Carregar fontes personalizadas usando expo-font
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fontes/Montserrat/static/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Retorna null ou um indicador de carregamento enquanto as fontes estão sendo carregadas
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("./assets/logotipo_econecta_341x98.png")}
      />
      <Text style={styles.texto}>
        {"\n"}
        {"\n"}
        {"\n"}Inicial
        {"\n"}
      </Text>

      <Image
        style={{ width: 400, height: 300, margin: 15 }}
        source={require("./assets/imagens/Cópia de Login.png")}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={{ width: 50, height: 50, margin: 15 }}
            source={require("./assets/imagens/house.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{ width: 50, height: 50, margin: 15 }}
            source={require("./assets/imagens/graphbar.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AddCultura")}>
          <Image
            style={{ width: 50, height: 50, margin: 15 }}
            source={require("./assets/imagens/plant.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ChatSuporte")}>
          <Image
            style={{ width: 50, height: 50, margin: 15 }}
            source={require("./assets/imagens/chat.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Conta")}>
          <Image
            style={{ width: 50, height: 50, margin: 15 }}
            source={require("./assets/imagens/user.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagem: {
    position: "absolute", // Posiciona a imagem de forma absoluta
    top: 0, // Coloca a imagem no topo
    width: 150,
    height: 40,
    alignSelf: "center", // Centraliza horizontalmente
    marginTop: 40, // Adiciona um espaçamento do topo da tela
  },
  imagemApps: {
    width: 20,
    height: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#364b56",
  },
  texto: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    fontFamily: "Montserrat",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    color: "#ffffff",
    fontFamily: "Montserrat",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#364b56",
    fontSize: 16,
    color: "#ffffff",
    fontFamily: "Montserrat",
  },
  esqueceuSenha: {
    fontSize: 14,
    color: "#fc7217",
    marginBottom: 20,
    fontFamily: "Montserrat",
  },
  containerBotao: {
    marginTop: 0,
    width: "100%",
    alignItems: "center",
  },
});
