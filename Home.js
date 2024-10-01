import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import axios from "axios";
import { useFonts } from "expo-font";
import { useNavigation, useRoute } from "@react-navigation/native";

// Substitua por sua chave da API do Pexels
const PEXELS_API_KEY = "EqoPh4kf9BUr97tpsVBBL0xjgVFXAHJt3aDdt7RBlSUTxXgIkH5CWd7K";

// Função para buscar imagem no Pexels
const buscarImagemPexels = async (query) => {
  try {
    const response = await axios.get("https://api.pexels.com/v1/search", {
      params: { query, per_page: 1 },
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });

    const imagens = response.data.photos;
    if (imagens.length > 0) {
      return imagens[0].src.medium; // Retorna a URL da imagem
    } else {
      return null; // Nenhuma imagem encontrada
    }
  } catch (error) {
    console.error("Erro ao buscar imagem no Pexels:", error);
    return null;
  }
};

// Mapeamento de nomes de hortaliças para imagens locais
const imagensHortalicas = {
  alface: require("./assets/imagens/alface.jpeg"),
  tomate: require("./assets/imagens/tomate.jpeg"),
  cenoura: require("./assets/imagens/cenoura.jpeg"),
};

export default function Home() {
  const navigation = useNavigation();
  const route = useRoute();

  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fontes/Montserrat/static/Montserrat-Regular.ttf"),
  });

  const [nome, setNome] = useState("");
  const [hortalicaSelecionada, setHortalicaSelecionada] = useState(null);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const [hortalicas, setHortalicas] = useState([]);

  const adicionarHortalica = async () => {
    if (nome) {
      const nomeLower = nome.toLowerCase();
      let imagem = imagensHortalicas[nomeLower];

      if (!imagem) {
        // Se não encontrar imagem local, busca uma imagem na API Pexels
        const imagemUrl = await buscarImagemPexels(nomeLower);
        if (imagemUrl) {
          imagem = { uri: imagemUrl };
        } else {
          // Usa uma imagem padrão se não encontrar nada
          imagem = require("./assets/imagens/plant.png");
        }
      }

      const newHortalica = {
        id: String(hortalicas.length + 1),
        nome,
        status: "Nova",
        temperatura: "22°C",
        umidade: "60%",
        tempoPlantada: "5 dias",
        imagem, // A imagem associada à hortaliça
      };

      setHortalicas([...hortalicas, newHortalica]);
      setNome("");
    }
  };

  const selecionarHortalica = (id) => {
    if (hortalicaSelecionada === id) {
      setHortalicaSelecionada(null);
      setMostrarDetalhes(false);
    } else {
      setHortalicaSelecionada(id);
      setMostrarDetalhes(true);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("./assets/logotipo_econecta_341x98.png")}
      />
      <Text style={styles.texto}>
        {"\n"}
        {"\n"}
        {"\n"}Inicial (em teste *não mexer)
        {"\n"}
      </Text>

      <View style={styles.addCultura}>
        <TextInput
          style={styles.input}
          placeholder="Nome da hortaliça"
          value={nome}
          onChangeText={setNome} // Atualiza o estado do nome
        />
        <Button title="Adicionar" onPress={adicionarHortalica} />
      </View>

      <FlatList
        data={hortalicas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => selecionarHortalica(item.id)}>
            <View style={styles.hortalica}>
              <Image source={item.imagem} style={styles.hortalicaImagem} />
              <Text style={styles.hortalicaNome}>{item.nome}</Text>
              {hortalicaSelecionada === item.id && (
                <>
                  <Text style={styles.hortalicaStatus}>
                    Status: {item.status}
                  </Text>
                  <TouchableOpacity
                    onPress={() => setMostrarDetalhes(!mostrarDetalhes)}
                  >
                    <Text style={styles.visionLink}>
                      {mostrarDetalhes
                        ? "Ocultar detalhes"
                        : "Ver visão completa"}
                    </Text>
                  </TouchableOpacity>
                  {mostrarDetalhes && (
                    <View style={styles.detalhes}>
                      <Text>Temperatura: {item.temperatura}</Text>
                      <Text>Umidade: {item.umidade}</Text>
                      <Text>Tempo Plantada: {item.tempoPlantada}</Text>
                    </View>
                  )}
                </>
              )}
            </View>
          </TouchableOpacity>
        )}
        numColumns={2} // Define o número de colunas na grade
        columnWrapperStyle={styles.columnWrapper} // Estilo para espaçamento entre colunas
      />

      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.icon}
            source={require("./assets/imagens/house.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("./assets/imagens/graphbar.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddCultura")}>
          <Image
            style={styles.icon}
            source={require("./assets/imagens/plant.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ChatSuporte")}>
          <Image
            style={styles.icon}
            source={require("./assets/imagens/chat.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Conta")}>
          <Image
            style={styles.icon}
            source={require("./assets/imagens/user.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Estilos para a interface
const styles = StyleSheet.create({
  imagem: {
    position: "absolute",
    top: 0,
    width: 150,
    height: 40,
    alignSelf: "center",
    marginTop: 40,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#364b56",
  },
  texto: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    fontFamily: "Montserrat",
  },
  addCultura: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginRight: 10,
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  hortalica: {
    padding: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flex: 1,
    margin: 5,
    backgroundColor: "#2b2b2b",
    borderRadius: 8,
    alignItems: "center",
  },
  hortalicaImagem: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  hortalicaNome: {
    fontSize: 18,
    color: "#ffffff",
  },
  hortalicaStatus: {
    fontSize: 14,
    color: "green",
  },
  visionLink: {
    color: "blue",
    marginTop: 5,
  },
  detalhes: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    margin: 15,
  },
});
