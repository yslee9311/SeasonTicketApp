import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import ManageSeasonTicket from '../components/pages/manageSeasonTicket';

const Stack = createNativeStackNavigator();

const horizontalAnimation: NativeStackNavigationOptions = {
    headerShown: false,
    animation: 'slide_from_right'
}

const SetOfStack = (value: { prop: { initialRouteName: string | undefined; }; }) => {
    return (
        <Stack.Navigator
            initialRouteName={value.prop.initialRouteName}
            screenOptions={horizontalAnimation}>
            <Stack.Screen name="ManageSeasonTicket" component={ManageSeasonTicket} />
        </Stack.Navigator>
    );
};

export const createRootNavigator = () => {
    let initialRouteName = 'ManageSeasonTicket'

    return (
        <NavigationContainer>
            <SetOfStack prop={{ initialRouteName }} />
        </NavigationContainer>
    )
}