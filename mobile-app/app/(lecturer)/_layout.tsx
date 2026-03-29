import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { FontAwesome5, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function LecturerLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({ color }) => <FontAwesome6 size={20} name="people-group" color={color} />,
                }}
            />
            <Tabs.Screen
                name="classes"
                options={{
                    title: 'Classes',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="chair-school" color={color} />,
                }}
            />
            <Tabs.Screen
                name="live"
                options={{
                    title: 'Live',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="progress-helper" color={color} />,
                }}
            />
            <Tabs.Screen
                name="reports"
                options={{
                    title: 'Reports',
                    tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="file-alt" color={color} />,
                }}
            />
        </Tabs>
    );
}
