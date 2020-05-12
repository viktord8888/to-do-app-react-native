import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import Colors from '../constans/Colors';

import Home from '../screens/Home';
import TodoList from '../screens/TodoList';
import Gallery from '../screens/Gallery';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors.red
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="TodoList"
                component={TodoList}
                options={{
                    tabBarLabel: 'TodoList',
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="tasklist" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Gallery"
                component={Gallery}
                options={{
                    tabBarLabel: 'Gallery',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-photos" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;