import SingleBook from "@/components/SingleBook";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableHighlight, View } from "react-native";

const BooksTable = ({ books }) => {
  const [idBookSearch, setIdBookSearch] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible)
  useEffect(() => {
    if (idBookSearch != 0) setModalVisible(true)
  }, [idBookSearch])
  return (
    <View className="pt-2">
      <View className="flex-row bg-gray-200 py-2 pl-3">
        <Text className="w-1/5 font-semibold text-2xl">Id</Text>
        <Text className="w-2/5 font-semibold text-start text-2xl">Titulo</Text>
        <Text className="w-2/5 font-semibold text-end text-2xl pr-2">Descripción</Text>
      </View>

      <FlatList
        className="py-3"
        data={books}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => { setIdBookSearch(item.id) }} underlayColor="white">
            <View className="flex-row py-7 border-b">
              <Text className="w-1/5 pl-2 text-black text-3xl">
                {`${item.id}`}
              </Text>
              <Text className="w-2/5 px-2 text-black text-3xl text-start">
                {item.title.length > 5 ? `${item.title.slice(0, 5)}…` : item.title}
              </Text>
              <Text className="w-2/5 pr-3 text-black text-2xl text-end">
                {item.body.length > 10 ? `${item.body.slice(0, 10)}…` : item.body}
              </Text>
            </View>
          </TouchableHighlight>
        )}
      />
      <SingleBook id={idBookSearch} toggleModal={toggleModal} isModalVisible={isModalVisible} setId={setIdBookSearch} />
    </View>
  );
};

export default BooksTable;