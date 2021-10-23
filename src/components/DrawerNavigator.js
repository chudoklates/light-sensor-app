import React from 'react'
import { StyleSheet } from 'react-native'
import { Drawer, DrawerItem, IndexPath } from '@ui-kitten/components'
import { colors } from '../theme'

const DrawerNavigator = ({ navigation, state }) => {
    return (
        <Drawer
            selectedIndex={new IndexPath(state.index)}
            onSelect={(index) =>
                navigation.navigate(state.routeNames[index.row])
            }
        >
            <DrawerItem title="Home" />
            <DrawerItem title="Graph" />
        </Drawer>
    )
}

export default DrawerNavigator
