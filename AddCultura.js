import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [hortalicas, setHortalicas] = useState([
    { id: '1', nome: 'Alface', status: 'Plantada' },
    { id: '2', nome: 'Cenoura', status: 'Crescendo' },
  ]);

  const [nome, setNome] = useState('');
  const navigation = useNavigation();

  // Função para adicionar uma nova hortaliça
  const adicionarHortalica = () => {
    if (nome.trim()) {
      const novaHortalica = {
        id: Date.now().toString(),
        nome,
        status: 'Plantada',
      };
      setHortalicas([...hortalicas, novaHortalica]);
      setNome(''); // Limpa o campo de texto após adicionar
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Econecta - Minhas Hortaliças</Text>

      {/* Formulário para adicionar nova hortaliça */}
      <View style={styles.addCultura}>
        <TextInput
          style={styles.input}
          placeholder="Nome da hortaliça"
          value={nome}
          onChangeText={setNome}
        />
        <Button title="Adicionar" onPress={adicionarHortalica} />
      </View>

      {/* Lista de hortaliças cadastradas */}
      <FlatList
        data={hortalicas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.hortalica}>
            <Text style={styles.hortalicaNome}>{item.nome}</Text>
            <Text style={styles.hortalicaStatus}>{item.status}</Text>
          </View>
        )}
      />

      {/* Botão para navegar para a tela "Entrar" */}
      <Button
        title="Ir para Entrar"
        onPress={() => navigation.navigate('Home', { hortalicas })}
      />
    </View>
  );
}

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