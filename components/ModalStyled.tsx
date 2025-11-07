import React from 'react'
import { Modal, View } from 'react-native'

const ModalStyled = ({ isModalVisible, content }) => {
    return (
        <Modal
            transparent
            animationType="fade"
            visible={isModalVisible}
        >
            <View className="flex-1 justify-center items-center bg-black/50">
                <View className="bg-white rounded-lg p-4 w-4/5 max-h-[80%]">
                    {content}
                </View>
            </View>
        </Modal>
    )
}

export default ModalStyled