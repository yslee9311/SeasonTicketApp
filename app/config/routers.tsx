import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import StManage from '../components/pages/stManage';
import ManageSeasonTicketPurchase from '../components/pages/purchase/manageSeasonTicketPurchase';

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
            <Stack.Screen name="StManage" component={StManage} />
            <Stack.Screen name="ManageSeasonTicketPurchase" component={ManageSeasonTicketPurchase} />
        </Stack.Navigator>
    );
};

export const createRootNavigator = () => {
    let initialRouteName = 'StManage'

    return (
        <NavigationContainer>
            <SetOfStack prop={{ initialRouteName }} />
        </NavigationContainer>
    )
}