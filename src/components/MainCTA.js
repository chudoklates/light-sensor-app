import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Icon } from '@ui-kitten/components'
import { colors } from '../theme'

const AddIcon = (props) => (
    <Icon name="plus-circle-outline" height="80" width="80" {...props} />
)

const MainCTA = ({ handlePress, ...props }) => (
    <Button
        accessoryLeft={AddIcon}
        size="giant"
        onPress={handlePress}
        style={[styles.cta, styles.shadow]}
        {...props}
    />
)

export default MainCTA

const styles = StyleSheet.create({
    cta: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        borderRadius: 120,
        width: 120,
        height: 120
    },
    shadow: {
        elevation: 14,
        shadowColor: colors.black
    }
})
