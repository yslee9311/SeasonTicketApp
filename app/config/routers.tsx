import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import StManage from '../components/pages/stManage';
import StPurchase from '../components/pages/stPurchase';
import StPurchaseDetails from '../components/pages/stPurchaseDetails';
import StPurchaseCompleted from '../components/pages/stPurchaseCompleted';
import StExtension from '../components/pages/stExtension';
import StExtensionDetails from '../components/pages/stExtensionDetails';
import StStatus from '../components/pages/stStatus';
import StStatusDetails from '../components/pages/stStatusDetails';
import { ContextProvider } from './contexts';

const Stack = createNativeStackNavigator();

const horizontalAnimation: NativeStackNavigationOptions = {
    headerShown: false,
    animation: 'slide_from_right'
}

const SetOfStack = (value: { prop: { initialRouteName: string | undefined; }; }) => {
    return (
        <ContextProvider>
            <Stack.Navigator
                initialRouteName={value.prop.initialRouteName}
                screenOptions={horizontalAnimation}>
                <Stack.Screen name="StManage" component={StManage} />
                <Stack.Screen name="StPurchase" component={StPurchase} />
                <Stack.Screen name="StPurchaseDetails" component={StPurchaseDetails} />
                <Stack.Screen name="StPurchaseCompleted" component={StPurchaseCompleted} options={{ gestureEnabled: false }} />
                <Stack.Screen name="StExtension" component={StExtension} />
                <Stack.Screen name="StExtensionDetails" component={StExtensionDetails} />
                <Stack.Screen name="StStatus" component={StStatus} />
                <Stack.Screen name="StStatusDetails" component={StStatusDetails} />
            </Stack.Navigator>
        </ContextProvider>
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