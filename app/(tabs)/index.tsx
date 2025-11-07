import BooksTable from "@/components/BooksTable";
import { fetchBooks } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const {
    data: books,
    loading: booksLoading,
    error: booksError,
  } = useFetch(() => fetchBooks({ query: "" }));
  return (
    <View className="flex-1 justify-center items-center px-2 py-2">
      <Text className="text-5xl text-primary font-bold">Comet Luma</Text>
      <Text className="text-2xl text-primary font-bold">
        Un espacio de descubrimiento
      </Text>
      <Text className="px-2 py-2 text-justify">Interactua con el titulo o la descripcion del libro para obtener mas información</Text>
      <ScrollView
        className="flex-1 px-3 min-w-full"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        {booksLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : booksError ? (
          <Text>Error: {booksError?.message}</Text>
        ) : (
          <BooksTable books={books} />
        )}
      </ScrollView>
    </View>
  );
}
