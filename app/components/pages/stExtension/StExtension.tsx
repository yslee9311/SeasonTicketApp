
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
} from 'react-native';

import colors from '../../../common/values/colors';

import HeaderTab from '../../molecules/headerTab';
import ExtensionInfo from '../../organisms/stExtension/extensionInfo';

interface Target {
    carNum: string
    name: string
    phoneNum: string
    label: string
    deadline: string
    price: number,
    func: Function,
}

type MyProps = {
    navigation: any
};
type MyState = {
    extensionList: Target[]
};

export default class StExtension extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            extensionList: [
                {
                    carNum: "11가1111",
                    name: "홍길동",
                    phoneNum: "010-1111-1111",
                    label: "추가월정기권",
                    deadline: "2023-04-01",
                    price: 88000,
                    func: () => { },
                },
                {
                    carNum: "22가2222",
                    name: "아무개",
                    phoneNum: "010-2222-2222",
                    label: "추가월정기권",
                    deadline: "2023-04-02",
                    price: 88000,
                    func: () => { },
                },
            ]
        };
    }

    render() {
        const { extensionList } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {Platform.OS === 'ios' ? (
                    <StatusBar barStyle={'light-content'} translucent={true} />
                ) : (
                    <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
                )}
                <HeaderTab
                    text={'정기권 연장/결제'}
                    backButtonVisible={true}
                    backFunc={() => this.props.navigation.goBack()}
                />
                <ExtensionInfo
                    extensionList={extensionList} />
            </View>
        )
    }
}

