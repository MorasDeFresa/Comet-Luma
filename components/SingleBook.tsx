import { fetchSingleBook } from '@/services/api';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import ModalStyled from './ModalStyled';

const SingleBook = ({ id, isModalVisible, toggleModal, setId }: { id: number, isModalVisible: boolean, toggleModal: any, setId: any }) => {
    const [book, setBook] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        if (isModalVisible) {
            const getBook = async () => {
                setLoading(true);
                setError(null);
                try {
                    const data = await fetchSingleBook({ id });
                    setBook(data);
                } catch (err: any) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };
            getBook();
        }
    }, [isModalVisible, id]);

    const CloseModal = () => {
        toggleModal();
        setId(0);
    }

    const content = (
        <>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center" />
            ) : error ? (
                <>
                    <Text>Error: {error?.message}</Text>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text className="text-center py-4 text-3xl bg-red-600 text-white">Close</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Text className='text-center text-3xl px-2 '>{book?.title}</Text>
                    <Text className='text-justify text-2xl font-semibold pt-3 pb-1 px-2'>Descripción</Text>
                    <Text className='text-justify text-2xl pb-3 pt-1 px-2'>{book?.body}</Text>
                    <TouchableOpacity onPress={() => { CloseModal() }}>
                        <Text className="text-center py-4 px-2 text-3xl bg-red-600 text-white">Close</Text>
                    </TouchableOpacity>
                </>
            )}
        </>
    );

    return <ModalStyled content={content} isModalVisible={isModalVisible} />;
};

export default SingleBook;
