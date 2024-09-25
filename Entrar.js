import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import BotaoCustomizado from "./BotaoCustomizado";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

export default function Entrar() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logotipo_econecta_341x98.png")}
        style={styles.imagem}
      />
      <Text style={styles.texto}>Login</Text>
      {/* Aqui você pode colocar seu formulário de login */}

      <form>
        <label>Nome:<input type="text" name="nome"/></label>
        <input type="submit" value="Enviar"/>
      </form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#364b56",
    paddingTop: 50,
  },
  texto: {
    fontSize: 24,
    marginTop: 100,
    color: "#fff",
    fontFamily: "./assets/fontes/Montserrat/static/Montserrat-Regular.ttf",
  },
  imagem: {
    justifyContent: "flex-start",
    width: 150,
    height: 40,
  },
  containerBotao: {
    marginTop: 20,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});
