import { StatusBar } from 'expo-status-bar'
import React from 'react'
import * as eva from '@eva-design/eva'
import { StyleSheet } from 'react-native'
// import { useLightSensor } from './utils'
import {
    ApplicationProvider,
    Button,
    Icon,
    IconRegistry,
    Layout
} from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { theme } from './theme'
import { Header, MainCTA } from './components'
import Home from './views/Home'

const App = () => {
    return (
        <Layout style={styles.container}>
            <Header />
            <Home />
            <MainCTA />
            <StatusBar style="auto" />
        </Layout>
    )
}

export default () => (
    <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
            <App />
        </ApplicationProvider>
    </>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 21,
        flexDirection: 'column'
    }
})
