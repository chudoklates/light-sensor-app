import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Item, MainCTA } from '../components'

const Home = ({ navigation, nItems = 0 }) => {
    return (
        <View>
            <ScrollView style={styles.home}>
                {new Array(nItems).fill({}).map((item, i) => (
                    <Item key={`item:${i}`} {...item} index={i} />
                ))}
            </ScrollView>
            <MainCTA handlePress={() => navigation.navigate('Graph')} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    home: {}
})
