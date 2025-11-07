import { fetchBooks } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";

export default function Index() {
    const router = useRouter();
    const { data: books, loading: booksLoading, error: booksError } = useFetch(() => fetchBooks({ query: "" }))
    return (
        <View className="flex-1 justify-center items-center px-2 py-2">
            <Text className="text-5xl text-primary font-bold">Comet Luma</Text>
            <Text className="text-2xl text-primary font-bold">Un espacio de descubrimiento</Text>
            <ScrollView className="flex-1 px-5" showsHorizontalScrollIndicator={false} contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}>
                {booksLoading ? (
                    <ActivityIndicator size='large' color='#0000ff' className="mt-10 self-center" />
                ) : booksError ? (
                    <Text>Error: {booksError?.message}</Text>
                ) : (
                    <FlatList
                        className="py-1"
                        data={books}
                        renderItem={({ item }) => (
                            <>
                                <Text className="text-black">{item.title.length > 8 ? `${item.title.slice(0, 10)}…` : item.title}</Text>
                            </>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        scrollEnabled={false}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'flex-start', gap: 50, paddingRight: 5, marginBottom: 10 }}
                    />
                )}
            </ScrollView>
        </View>
    );
}