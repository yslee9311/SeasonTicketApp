import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import StManage from '../components/pages/stManage';
import StPurchase from '../components/pages/stPurchase';
import StPurchaseDetails from '../components/pages/stPurchaseDetails';
import StExtension from '../components/pages/stExtension';
import StStatus from '../components/pages/stStatus';

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
            <Stack.Screen name="StPurchase" component={StPurchase} />
            <Stack.Screen name="StPurchaseDetails" component={StPurchaseDetails} />
            <Stack.Screen name="StExtension" component={StExtension} />
            <Stack.Screen name="StStatus" component={StStatus} />
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