import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import List from "../components/list"

class HomeScreen extends React.Component {
  render() {
    const lojas = [
      {
        id: 1,
        imagem: require("../../assets/pessoa.jpg"),
        nome: "Pessoa",
        descricao: "Pessoa-1",
        contatos: [
          {
            type: "Telefone:"
            value: "98888-8888"
          },
          {
            type: "Email:",
            value: "johanneswildner@gmail.com"
          }
        ]
      },
      {
        id: 2,
        imagem: require("../../assets/pessoa.jpg"),
        nome: "Pessoa",
        descricao: "Pessoa-2"
      },
      {
        id: 3,
        imagem: require("../../assets/pessoa.jpg"),
        nome: "Pessoa",
        descricao: "Pessoa-3"
      },
      {
        id: 4,
        imagem: require("../../assets/pessoa.jpg"),
        nome: "Pessoa",
        descricao: "Pessoa-4"
      },
      {
        id: 5,
        imagem: require("../../assets/pessoa.jpg"),
        nome: "Pessoa",
        descricao: "Pessoa-5"
      },
      {
        id: 6,
        imagem: require("../../assets/pessoa.jpg"),
        nome: "Pessoa",
        descricao: "Pessoa-6"
      }
    ];

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <List contatos={lojas} />
      </View>
    );
  }
}

export default HomeScreen;