import React from "react";
import { Alert, FlatList, Text, TouchableHighlight, View } from "react-native";

const BooksTable = ({ books }) => {
  return (
    <View>
      {/* Cabecera de la tabla */}
      <View className="flex-row bg-gray-200 py-2 px-1">
        <Text className="w-1/6 font-semibold text-2xl">Id</Text>
        <Text className="w-2/6 font-semibold text-center text-2xl">Titulo</Text>
        <Text className="w-3/6 font-semibold text-right text-2xl pr-2">Descripción</Text>
      </View>

      <FlatList
        className="py-3"
        data={books}
        keyExtractor={(item) => item.userId.toString() + item.id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => { Alert.alert('You long-pressed the button!'); }} underlayColor="white">
            <View className="flex-row py-7 border-b">
              <Text className="flex-1 px-1 text-black text-3xl">
                {`${item.userId}${item.id}`}
              </Text>
              <Text className="flex-1 px-1 text-black text-3xl">
                {item.title.length > 5 ? `${item.title.slice(0, 5)}…` : item.title}
              </Text>
              <Text className="flex-1 px-1 text-black text-2xl">
                {item.body.length > 10 ? `${item.body.slice(0, 10)}…` : item.body}
              </Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

export default BooksTable;