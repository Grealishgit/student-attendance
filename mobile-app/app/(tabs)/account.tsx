import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AccountPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.pageTitle}>Student Account Page</Text>
            <Text style={styles.subTitle}>Manage Profiles and other information here</Text>
        </SafeAreaView>
    )
}

export default AccountPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#aca3a3',
    },
    subTitle: {
        fontSize: 8,
        color: 'blue',
    },
})