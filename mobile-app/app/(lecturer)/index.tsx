import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const DashboardPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.pageTitle}>Lecturer | Dashboard</Text>
        </SafeAreaView>
    )
}

export default DashboardPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#aca3a3',
    },
})