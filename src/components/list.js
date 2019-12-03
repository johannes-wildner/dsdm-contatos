import React from "react";
import { View, Text, FlatList } from "react-native";

class List extends React.Component {
  render() {
    return (
      <FlatList
          data={this.props.contatos}
          renderItem={({ item }) => <Text>{item.descricao}</Text>}
          keyExtractor={item => item.id}
        />
    );
  }
}

export default List;
