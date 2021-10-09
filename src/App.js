import { StatusBar } from 'expo-status-bar'
import React from 'react'
import * as eva from '@eva-design/eva'
import { StyleSheet } from 'react-native'
// import { useLightSensor } from './utils'
import {
    ApplicationProvider,
    IconRegistry,
    Layout
} from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { colors } from './theme'
import { Header } from './components'

const App = () => {
    return (
        <Layout style={styles.container}>
            <Header />
            <StatusBar style="auto" />
        </Layout>
    )
}

export default () => (
    <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
            <App />
        </ApplicationProvider>
    </>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        paddingVertical: 21,
        flexDirection: 'column',
        backgroundColor: colors.white1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})
