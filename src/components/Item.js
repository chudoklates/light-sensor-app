import React from 'react'
import { StyleSheet } from 'react-native'
import { Card } from '@ui-kitten/components'
import { colors } from '../theme'

const randomColor = [colors.bright, colors.light, colors.dark]

const Item = ({ index }) => {
    const backgroundColor = randomColor[index % randomColor.length]

    return (
        <Card
            style={[
                styles.item,
                {
                    backgroundColor
                }
            ]}
        />
    )
}

export default Item

const styles = StyleSheet.create({
    item: {
        height: 160,
        borderRadius: 10,
        marginBottom: 24,
        marginHorizontal: 10
    }
})
