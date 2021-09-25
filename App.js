import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter,
    NativeModules
} from 'react-native'

const sensorManager = NativeModules.SensorManager

const App = () => {
    const [light, setLight] = useState(0)

    useEffect(() => {
        sensorManager.startLightSensor(100)

        DeviceEventEmitter.addListener('LightSensor', (data) => {
            setLight(data.light)
        })

        return () => sensorManager.stopLightSensor()
    })

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
