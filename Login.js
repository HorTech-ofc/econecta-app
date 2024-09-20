import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import CustomButton from './CustomButton';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logotipo_econecta_341x98.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Conectando{'\n'}comunidades,</Text>
      <View style={styles.buttonsContainer}>
        <CustomButton onPress={() => {}} title="Login" />
        <CustomButton onPress={() => {}} title="Cadastrar" />
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
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 100,
      color: '#fff',
    },
    image: {
      justifyContent: 'flex-start',
      width: 150,
      height: 40,
    },
    buttonsContainer: {
      marginTop: 20,
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });