import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ModalStyled from './ModalStyled';
const PageSizeOptions = [
    { size: 10 },
    { size: 20 },
    { size: 50 }
]


const PaginationHeader = ({ actualPage, maxPage, sizePage, setSizePage, setPage }: { actualPage: number, maxPage: number, sizePage: number, setSizePage: any, setPage: any }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!isModalVisible)
    const ChangePageSize = (newSize: number) => {
        setPage(0)
        setSizePage(newSize)
        toggleModal()
    }
    const ChangePage = (countPage: number) => setPage(actualPage + countPage)

    const content = (
        <>
            <Text className='text-center text-3xl'>¿Cuántos libros deseas ver por página?</Text>
            <FlatList
                data={PageSizeOptions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => ChangePageSize(item?.size)}>
                        <Text className='text-center py-4 text-3xl'>{item?.size}</Text>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity onPress={toggleModal}>
                <Text className='text-center py-4 text-3xl bg-red-600 text-white'>Close</Text>
            </TouchableOpacity>
        </>
    )

    return (
        <View>
            <View className='flex-row py-5'>
                <TouchableOpacity className='text-left w-1/2 px-3' onPress={toggleModal}>
                    <Text className='text-2xl text-center'>{sizePage} Libros por página ⬇️</Text>
                </TouchableOpacity>
                <Text className='text-right w-1/2 px-3 text-2xl'>Página {actualPage + 1} de {maxPage}</Text>
                <ModalStyled content={content} isModalVisible={isModalVisible} />
            </View>
            <View className='px-1 py-5 flex-row'>
                <TouchableOpacity className='w-1/2' disabled={actualPage == 0} onPress={() => ChangePage(-1)}>
                    <Text className='text-center text-3xl'>⬅️</Text>
                </TouchableOpacity>
                <TouchableOpacity className='w-1/2' disabled={actualPage == maxPage - 1} onPress={() => ChangePage(1)}>
                    <Text className='text-center text-3xl'>➡️</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const PaginationFooter = () => {
    return (
        <View>
            <Text>Pagination</Text>
        </View>
    )
}

export { PaginationFooter, PaginationHeader };

