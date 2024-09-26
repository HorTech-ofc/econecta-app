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
        <label>
          E-mail:
          <input type="text" name="email" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
      <form>
        <label>
          Senha:
          <input type="password" name="senha" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
      <label> Esqueceu a senha? </label>
      <View style={styles.containerBotao}>
        <BotaoCustomizado
          corBotao="#f28123"
          onPress={() => navigation.navigate("Entrar")}
          title="Login"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#364b56",
  },
  imagem: {
    width: 341,
    height: 98,
    marginBottom: 20,
  },
  texto: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  esqueceuSenha: {
    fontSize: 14,
    color: "#007BFF",
    marginBottom: 20,
  },
  containerBotao: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
});
