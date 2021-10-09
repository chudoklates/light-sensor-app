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
import { colors, theme } from './theme'
import { Header, MainCTA } from './components'

const App = () => {
    return (
        <Layout style={styles.container}>
            <Header />
            <MainCTA />
            <StatusBar style="auto" />
        </Layout>
    )
}

export default () => (
    <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
            <App />
        </ApplicationProvider>
    </>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        paddingVertical: 21,
        paddingRight: 10,
        flexDirection: 'column',
        backgroundColor: colors.white1,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    }
})
