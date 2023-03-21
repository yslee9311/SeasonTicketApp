
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

import colors from '../../../common/values/colors';

import DefaultText from '../../atoms/texts/defaultText';
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
                <StyledSummaryHeader
                    statusBarHeight={getStatusBarHeight(true)}>
                    <DefaultText
                        text={'정기권 연장/결제'}
                        size={26}
                        weight={'Bold'}
                        color={colors.white}
                    />
                </StyledSummaryHeader>
                <ExtensionInfo
                    extensionList={extensionList} />
            </View>
        )
    }
}

const StyledSummaryHeader = styled.View<{ statusBarHeight: number }>`
    height: ${props => 120 + props.statusBarHeight}px;
    background-color: ${colors.primary};
    padding: 16px;
    padding-top: ${props => props.statusBarHeight + 30}px;
`;
