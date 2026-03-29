import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Student Home Page</Text>
      <Text style={styles.subTitle}>Welcome to the Student Home Page</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#aca3a3',
  },
  subTitle: {
    fontSize: 20,
    color: 'yellow',
  },
})