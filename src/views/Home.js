import React from 'react'
import { ScrollView } from 'react-native'
import { Item } from '../components'

const Home = ({ nItems = 0 }) => {
    return (
        <ScrollView>
            {new Array(nItems).fill({}).map((item, i) => (
                <Item key={`item:${i}`} {...item} index={i} />
            ))}
        </ScrollView>
    )
}

export default Home
