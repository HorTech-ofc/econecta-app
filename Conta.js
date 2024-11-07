import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import BotaoCustomizado from './BotaoCustomizado';
import { v4 as uuidv4 } from 'uuid';
const uuid = require('uuid').v4;

export default function Conta() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [profileImage, setProfileImage] = useState(require('./assets/imagens/user.png'));
  const [notificacoesVisible, setNotificacoesVisible] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  const pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      Alert.alert('Permissão para acessar a galeria é necessária!');
      return;
    }

    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    const response = await launchImageLibrary(options);
    console.log(response);
    if (response.didCancel) {
      Alert.alert('Seleção de imagem cancelada');
    } else if (response.errorCode) {
      Alert.alert('Erro ao selecionar imagem:', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      const source = { uri: response.assets[0].uri };
      setProfileImage(source);
    }
  };

  const handleSalvar = () => {
    try {
      // Lógica para salvar as informações (não implementada)
    } catch (error) {
      alert('Informações salvas!');
    }
  };

  const opcoesNotificacoes = [
    'Silenciar todas',
    'Silenciar apenas blog',
    'Silenciar apenas horta',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.userContainer}>
      <Text style={styles.texto}>Usuário</Text>
        <Image
          style={styles.profileImage}
          source={profileImage}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome Completo:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"

        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
          placeholder="Digite seu telefone"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />

        <Text style={styles.label}>Sexo:</Text>
        <TextInput
          style={styles.input}
          value={novaSenha}
          onChangeText={setNovaSenha}
          secureTextEntry
          placeholder="Sexo"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />

        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={styles.input}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
          placeholder="Confirme sua senha"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />

        <TouchableOpacity
          style={styles.notificacoesContainer}
          onPress={() => setNotificacoesVisible(!notificacoesVisible)}
        >
          <Text style={styles.label}>Notificações </Text>
          <Text style={styles.toggleText}>{notificacoesVisible ? 'Ocultar' : 'Mostrar'}</Text>
        </TouchableOpacity>

        {notificacoesVisible && (
          <FlatList
            data={opcoesNotificacoes}
            keyExtractor={(item) => uuid()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.opcaoNotificacao}
                onPress={() => setOpcaoSelecionada(item)}
              >
                <Text style={styles.opcaoTexto}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
        
        <BotaoCustomizado
        onPress={handleSalvar}
        title="Editar"
        corBotao="#f28123"
        corTexto="#364b56"
        
  tamanhoBotao={{ width: 70, height: 15 }}
      />

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginLeft:260,
    margintop:900,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 100,
  },
  texto: {
    fontSize: 18,
    color: '#fff',
  },
  changePhotoButton: {
    marginBottom: 20,
  },
  changePhotoText: {
    color: '#f28123',
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    // borderWidth: 0,
    // borderRadius: 5,
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  notificacoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  toggleText: {
    color: '#f28123',
  },
  opcaoNotificacao: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  opcaoTexto: {
    fontSize: 14,
    color: '#364b56',
  },
});