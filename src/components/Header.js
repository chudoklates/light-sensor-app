import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
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

const MenuAction = (props) => (
    <TopNavigationAction icon={MenuIcon} style={styles.menuAction} {...props} />
)

const Header = () => {
    // const light = useLightSensor()

    return <TopNavigation accessoryLeft={MenuAction} style={styles.menu} />
}

export default Header

const styles = StyleSheet.create({
    menuAction: {
        backgroundColor: colors.dark,
        padding: 10,
        borderRadius: 70
    }
})
