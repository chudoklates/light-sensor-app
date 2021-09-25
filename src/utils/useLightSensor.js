import { useEffect, useState } from 'react'
import { DeviceEventEmitter, NativeModules } from 'react-native'

const sensorManager = NativeModules.SensorManager

const useLightSensor = () => {
    const [light, setLight] = useState(0)

    useEffect(() => {
        sensorManager.startLightSensor(100)

        const subscription = DeviceEventEmitter.addListener(
            'LightSensor',
            (data) => {
                setLight(data.light)
            }
        )

        return () => {
            sensorManager.stopLightSensor()
            subscription.remove()
        }
    })

    return light
}

export default useLightSensor
