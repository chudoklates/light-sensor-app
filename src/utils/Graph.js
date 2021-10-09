import React, { useState, useEffect } from 'react'
import { Dimensions, View } from 'react-native'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native'
import useLightSensor from './useLightSensor'

const Graph = () => {
    const [data, setData] = useState([])
    const light = useLightSensor()

    useEffect(() => {
        const interval = setInterval(() => {
            setData([
                ...data,
                {
                    time: new Date(),
                    light
                }
            ])
        }, 1000)
        return () => clearInterval(interval)
    }, [data])

    const { width } = Dimensions.get('screen')

    return (
        <View>
            <VictoryChart
                width={width - 20}
                height={350}
                theme={VictoryTheme.material}
            >
                <VictoryLine
                    style={{
                        data: { stroke: 'royalblue' }
                    }}
                    data={data}
                    x="time"
                    y="light"
                />
            </VictoryChart>
        </View>
    )
}

export default Graph
