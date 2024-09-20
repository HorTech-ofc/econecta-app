import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, title }) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
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
  text: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#364b56',
  },
});

export default CustomButton;
