import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Icon,
    TopNavigation,
    TopNavigationAction,
    Drawer,
    DrawerItem
} from '@ui-kitten/components'
import { colors } from '../theme'

const MenuIcon = (props) => (
    <Icon
        name="menu-outline"
        fill={colors.white}
        width={39}
        height={39}
        {...props}
    />
)

const MenuAction = ({ toggleDrawer, ...props }) => (
    <TopNavigationAction
        icon={MenuIcon}
        style={styles.menuAction}
        {...props}
        onPress={toggleDrawer}
    />
)

const Header = ({ navigation: { toggleDrawer } }) => {
    return (
        <TopNavigation
            accessoryLeft={(props) => (
                <MenuAction {...props} toggleDrawer={toggleDrawer} />
            )}
            style={styles.menu}
        />
    )
}

export default Header

const styles = StyleSheet.create({
    menuAction: {
        backgroundColor: colors.dark,
        padding: 10,
        borderRadius: 70
    }
})
