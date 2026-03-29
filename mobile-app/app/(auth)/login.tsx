import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import SignupPage from './signup'

const LoginPage = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.pageTitle}>Login</Text>
            <Text style={styles.roleText}>Choose Your Role:</Text>

            <View style={styles.buttonContainer}>
                <Pressable onPress={() => router.push('/(tabs)')} style={styles.studentButton}>
                    <Text style={styles.buttonText}>Student</Text>
                </Pressable>
                <Pressable onPress={() => router.navigate('/(lecturer)' as any)} style={styles.lecturerButton}>
                    <Text style={styles.buttonText}>Lecturer</Text>
                </Pressable>
            </View>

            <View style={styles.bottomButtonContainer}>
                <Pressable onPress={() => router.push('/(auth)/signup')} style={styles.signUpButton}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    roleText: {
        fontSize: 30,
        marginBottom: 20,
        color:'#aca3a3',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    signUpButton: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginBottom: 10,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 5,
        alignItems: 'center',
    },
    studentButton: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34C759',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,

    },
    lecturerButton: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9500',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    bottomButtonContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },


})