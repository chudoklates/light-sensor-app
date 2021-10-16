import React from 'react'
import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import { Item, MainCTA } from '../components'

const Home = ({ navigation, nItems = 0 }) => {
    return (
        <ScrollView style={styles.home}>
            {new Array(nItems).fill({}).map((item, i) => (
                <Item key={`item:${i}`} {...item} index={i} />
            ))}
            <MainCTA handlePress={() => navigation.navigate('Graph')} />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    home: {}
})
