import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={
                    {
                        title: 'Inicio',
                        headerShown: false
                    }
                } />
            <Tabs.Screen
                name='create'
                options={
                    {
                        title: 'Crear',
                        headerShown: false
                    }
                } />
        </Tabs>
    )
}
export default _layout