
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Details from '../../screens/Details';
import Home from '../../screens/Home';
import { COLORS } from '../../constans';
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.gray10,
                },
            }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{

                    title: 'Home',
                }}
                // options={{
                //     headerShown: false,
                //   }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{

                    title: 'Details',
                }}
            />

            {/* <Stack.Screen
                name="GameScreen"
                component={GameScreen}
                options={{
                    title: 'Home',
                }}
            /> */}
        </Stack.Navigator>
    );
};

export default StackNavigator;
