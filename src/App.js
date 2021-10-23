// REACT / REACT-NATIVE
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'
// NAVIGATION
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
// EVA DESIGN / UIKITTEN
import * as eva from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import {
    ApplicationProvider,
    IconRegistry,
    Layout,
    Text
} from '@ui-kitten/components'
// USER DEFINED
import { theme } from './theme'
import { Header, DrawerNavigator, Graph } from './components'
import { Home } from './views'

const { Navigator, Screen } = createDrawerNavigator()

const App = () => {
    return (
        <Layout style={styles.container}>
            <NavigationContainer>
                <Navigator
                    screenOptions={{
                        header: (props) => <Header {...props} />
                    }}
                    drawerContent={(props) => <DrawerNavigator {...props} />}
                >
                    <Screen name="Home">
                        {(props) => <Home {...props} nItems={5} />}
                    </Screen>
                    <Screen name="Graph">
                        {(props) => <Graph {...props} />}
                    </Screen>
                </Navigator>
            </NavigationContainer>
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
        paddingVertical: 21,
        flexDirection: 'column'
    }
})
