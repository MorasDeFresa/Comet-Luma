import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={
                    {
                        title: 'Home',
                        headerShown: true
                    }
                } />
            <Tabs.Screen
                name='create'
                options={
                    {
                        title: 'Create',
                        headerShown: true
                    }
                } />
        </Tabs>
    )
}
export default _layout