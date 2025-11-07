import BooksTable from "@/components/BooksTable";
import { PaginationHeader } from "@/components/Pagination";
import { fetchBooks } from "@/services/api";
import useFetch from "@/services/useFetch";
import usePagination from "@/services/usePagination";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

export default function Index() {
  const [page, setPage] = useState(0)
  const [sizePage, setSizePage] = useState(10)
  const {
    data: books,
    loading: booksLoading,
    error: booksError,
  } = useFetch(() => fetchBooks({ query: "" }));

  const { paginate, dataStructure } = usePagination();

  useEffect(() => {
    if (books) {
      paginate(books, sizePage);
    }
  }, [books, sizePage]);

  return (
    <View className="flex-1 justify-center items-center px-2 pt-12">
      <Text className="text-5xl text-primary font-bold">Comet Luma</Text>
      <Text className="text-2xl text-primary font-bold">
        Un espacio de descubrimiento
      </Text>
      <Text className="px-2 py-2 text-justify text-xl">Interactua con el titulo o la descripcion del libro para obtener mas información</Text>
      <PaginationHeader actualPage={page} sizePage={sizePage} maxPage={dataStructure?.length} setSizePage={setSizePage} setPage={setPage} />

      <ScrollView
        className="flex-1 px-3 min-w-full max-h-full"
        showsHorizontalScrollIndicator={true}
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
          <BooksTable books={dataStructure[page]?.data} />
        )}
      </ScrollView>
    </View>
  );
}
