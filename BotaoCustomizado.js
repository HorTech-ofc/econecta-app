import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const BotaoCustomizado = ({ onPress, title }) => (
  <Pressable style={styles.botao} onPress={onPress}>
    <Text style={styles.texto}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: '#39b54a',
    width: 270,
    height: 60,
    marginTop: 20,
  },
  texto: {
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: '#364b56',
    fontFamily: './assets/fontes/Montserrat/static/Montserrat-Bold.ttf',
  },
});

export default BotaoCustomizado;
