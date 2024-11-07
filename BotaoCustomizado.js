import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotaoCustomizado = ({ onPress, title, corBotao, corTexto, tamanhoBotao  }) => {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: corBotao, width: tamanhoBotao.width, height: tamanhoBotao.height }]}
      onPress={onPress}
    >
      <Text style={[styles.texto, { color: corTexto }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: 270,
    height: 50,
    marginTop: 20,
  },
  texto: {
    fontSize: 23,
    textAlign: 'justify',
    lineHeight: 22,
    letterSpacing: 0.25,
    fontFamily: './assets/fontes/Montserrat/static/Montserrat-Bold.ttf',
  },
});

export default BotaoCustomizado;