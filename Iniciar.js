import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useFonts } from 'expo-font';
import BotaoCustomizado from './BotaoCustomizado';

export default function Start() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logotipo_econecta_341x98.png')}
        style={styles.imagem}
      />
      <Text style={styles.texto}>Conectando{'\n'}comunidades,{'\n'}Cultivando{'\n'}sustentabilidade</Text>
      <View style={styles.containerBotao}>
        <BotaoCustomizado onPress={() => {}} title="Login" />
        <BotaoCustomizado onPress={() => {}} title="Cadastrar" />
      </View>
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