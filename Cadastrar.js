import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotaoCustomizado from './BotaoCustomizado';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function Cadastrar() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo à tela de Cadastro</Text>
      {/* Aqui você pode colocar seu formulário de cadastro */}
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
    marginTop: 100,
    color: '#fff',
    fontFamily: './assets/fontes/Montserrat/static/Montserrat-Regular.ttf',
  },
  imagem: {
    justifyContent: 'flex-start',
    width: 150,
    height: 40,
  },
  containerBotao: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});