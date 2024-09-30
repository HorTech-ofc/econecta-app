import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [hortalicas, setHortalicas] = useState([]);
  const [nome, setNome] = useState('');

  const adicionarHortalica = () => {
    setHortalicas([...hortalicas, { nome, status: 'Plantada' }]);
    setNome('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Econecta</Text>
      <View style={styles.addCultura}>
        <TextInput
          style={styles.input}
          placeholder="Nome da hortaliça"
          value={nome}
          onChangeText={setNome}
        />
        <Button title="Adicionar" onPress={adicionarHortalica} />
      </View>
      <FlatList
        data={hortalicas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.hortalica}>
            <Text style={styles.hortalicaNome}>{item.nome}</Text>
            <Text style={styles.hortalicaStatus}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  addCultura: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },
  hortalica: {
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  hortalicaNome: {
    fontSize: 18,
  },
  hortalicaStatus: {
    fontSize: 14,
    color: 'green',
  },
});

export default App;
