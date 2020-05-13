import React, { FC } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import Colors from '../constants/Colors';

import Home from '../screens/HomeScreen/Home';
import TodoList from '../screens/TodoListScreen/TodoList';
import Gallery from '../screens/GalleryScreen/Gallery';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs: FC = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={Colors.white}
            shifting
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: Colors.purple,
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-home" color={color} size={22} />
                    )
                }}
            />
            <Tab.Screen
                name="TodoList"
                component={TodoList}
                options={{
                    tabBarLabel: 'ToDo',
                    tabBarColor: Colors.pink,
                    tabBarIcon: ({ color }) => (
                        <Octicons name="tasklist" color={color} size={22} />
                    )
                }}
            />
            <Tab.Screen
                name="Gallery"
                component={Gallery}
                options={{
                    tabBarLabel: 'Gallery',
                    tabBarColor: Colors.orange,
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-photos" color={color} size={22} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;