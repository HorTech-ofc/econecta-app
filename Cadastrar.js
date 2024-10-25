import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Alert } from "react-native";
import axios from "axios";
import BotaoCustomizado from "./BotaoCustomizado";
import { useNavigation } from "@react-navigation/native";

export default function Cadastrar() {
  const navigation = useNavigation();

  // Estados para capturar os dados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");

  // Função para lidar com o cadastro
  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    try {
      const response = await axios.post("https://localhost3001.com/cadastrar", {
        nome,
        email,
        senha,
        dataNascimento,
        telefone,
      });

      if (response.status === 200) {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        navigation.navigate("Home"); // Redireciona para a Home após o sucesso
      } else {
        Alert.alert("Erro", "Ocorreu um erro ao realizar o cadastro.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível se conectar ao servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logotipo_econecta_341x98.png")}
        style={styles.imagem}
      />

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            value={nome}
            onChangeText={setNome}
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="exemplo@dominio.com"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirmar Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data de Nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholder="(XX) XXXXX-XXXX"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>
      </View>

      <BotaoCustomizado
        corBotao="#f28123"
        corTexto="#364b56"
        style={styles.BotaoCustomizado}
        onPress={handleCadastro}
        title="Confirmar"
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
          alignItems: "center",
        }}
      >
        <Text style={styles.label}>Já possui uma conta?</Text>
        <Text
          onPress={() => navigation.navigate("Entrar")}
          style={{ color: "#f28123", fontFamily: "Montserrat", fontSize: 15 }}
        >
          Entre
        </Text>
      </View>
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
    marginTop: 20,
    color: "#fff",
    textAlign: "center",
  },
  imagem: {
    width: 150,
    height: 40,
    marginVertical: 20,
  },
  form: {
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  inputContainer: {
    width: "100%",
    marginVertical: 10,
  },
  label: {
    color: "#fff",
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
    backgroundColor: "#364b56",
    color: "#fff",
  },
});
