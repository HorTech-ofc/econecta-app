import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import BotaoCustomizado from './BotaoCustomizado';

export default function Conta() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [profileImage, setProfileImage] = useState(require('./assets/imagens/user.png'));
  const [notificacoesVisible, setNotificacoesVisible] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  const pickImage = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };
    
    launchImageLibrary(options, (response) => {
      console.log(response);
      if (response.didCancel) {
        Alert.alert('Seleção de imagem cancelada');
      } else if (response.errorCode) {
        Alert.alert('Erro ao selecionar imagem:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source);
      }
    });
  };

  const handleSalvar = () => {
    try {
      
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
      <Text style={styles.texto}>Bem-vindo à sua conta</Text>

      <TouchableOpacity onPress={pickImage}>
        <Image
          style={styles.profileImage}
          source={profileImage}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImage} style={styles.changePhotoButton}>
        <Text style={styles.changePhotoText}>Alterar Foto de Perfil</Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
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

        <Text style={styles.label}>Nova Senha</Text>
        <TextInput
          style={styles.input}
          value={novaSenha}
          onChangeText={setNovaSenha}
          secureTextEntry
          placeholder="Digite sua nova senha"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />

        <Text style={styles.label}>Confirmar Senha</Text>
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
          <Text style={styles.label}>Notificações</Text>
          <Text style={styles.input}>{opcaoSelecionada || 'Selecione uma opção'}</Text>
        </TouchableOpacity>

        {notificacoesVisible && (
          <FlatList
            data={opcoesNotificacoes}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setOpcaoSelecionada(item);
                  setNotificacoesVisible(false);
                }}
              >
                <Text style={styles.dropdownText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      <BotaoCustomizado
        onPress={handleSalvar}
        title="Salvar Informações"
        corBotao="#f28123"
        corTexto="#364b56"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#364b56',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  texto: {
    fontSize: 24,
    marginTop: 20,
    color: '#fff',
    textAlign: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
    borderColor: '#fff',
    borderWidth: 2,
  },
  changePhotoButton: {
    marginBottom: 10,
  },
  changePhotoText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
  },
  infoContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 15,
    backgroundColor: '#fff',
    color: '#000',
    marginBottom: 15,
    height: 50,
  },
  notificacoesContainer: {
    width: '100%',
    marginBottom: 15,
  },
  dropdownItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
  },
  dropdownText: {
    color: '#000',
  },
});
