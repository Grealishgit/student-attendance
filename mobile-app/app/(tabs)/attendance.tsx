import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AttendancePage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.pageTitle}>Student Attendance Page</Text>
            <Text style={styles.subTitle}>Manage attendance and other information here</Text>
        </SafeAreaView>
    )
}

export default AttendancePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#aca3a3',
    },
    subTitle: {
        fontSize: 16,
        color: 'red',
    }

})