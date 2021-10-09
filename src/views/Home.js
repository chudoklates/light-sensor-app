import React from 'react'
import { ScrollView } from 'react-native'
import { Item } from '../components'

const Home = () => {
    return (
        <ScrollView>
            {new Array(5).fill({}).map((item, i) => (
                <Item key={`item:${i}`} {...item} index={i} />
            ))}
        </ScrollView>
    )
}

export default Home
