import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useLightSensor } from './utils'

const App = () => {
    const light = useLightSensor()

    return (
        <View style={styles.container}>
            <Text>Light: {light} [lux]</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
