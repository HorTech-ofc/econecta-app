import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import BotaoCustomizado from './BotaoCustomizado';
import { useNavigation } from '@react-navigation/native';

export default function Cadastrar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo à tela de Cadastro</Text>
      <Image
        source={require('./assets/logotipo_econecta_341x98.png')}
        style={styles.imagem}
      />
      <Text style={styles.texto}>Cadastrar</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor="rgba(255, 255, 255, 0.5)" required />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} placeholder="exemplo@dominio.com" placeholderTextColor="rgba(255, 255, 255, 0.5)" keyboardType="email-address" required />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor="rgba(255, 255, 255, 0.5)" secureTextEntry required />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirmar Senha</Text>
          <TextInput style={styles.input} placeholder="Confirme sua senha" placeholderTextColor="rgba(255, 255, 255, 0.5)" secureTextEntry required />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data de Nascimento</Text>
          <TextInput style={styles.input} placeholder="DD/MM/AAAA" placeholderTextColor="rgba(255, 255, 255, 0.5)" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput style={styles.input} placeholder="(XX) XXXXX-XXXX" placeholderTextColor="rgba(255, 255, 255, 0.5)" keyboardType="phone-pad" />
        </View>
      </View>
      <BotaoCustomizado
        onPress={() => navigation.navigate('Confirmar')}
        title="Confirmar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#364b56',
    paddingTop: 50,
  },
  texto: {
    fontSize: 24,
    marginTop: 20,
    color: '#fff',
    textAlign: 'center',
  },
  imagem: {
    width: 150,
    height: 40,
    marginVertical: 20,
  },
  form: {
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    backgroundColor: '#364b56',
    color: '#fff',
  },
});
