
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
} from 'react-native';
import styled from 'styled-components/native';

import colors from '../../../common/values/colors';

import HeaderTab from '../../molecules/headerTab';
import StStatusContainer from '../../organisms/stManage/stStatusContainer';
import StMenuContainer from '../../organisms/stManage/stMenuContainer';

type MyProps = {
    navigation: any
};
type MyState = {
    seasonTicketStatus: Object
    seasonTicketMenu: Object
};

export default class StManage extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            seasonTicketStatus: {
                "totalVehicle": {
                    text: "전체 대수",
                    number: 8,
                },
                "registered": {
                    text: "등록 차량",
                    number: 6,
                },
                "registerable": {
                    text: "등록 가능",
                    number: 2,
                },
                "waitPayment": {
                    text: "결제 대기",
                    number: 1,
                },
            },
            seasonTicketMenu: {
                "purchase": {
                    text: "정기권 구매",
                    func: () => {
                        this.props.navigation.navigate('StPurchase', {})
                    }
                },
                "extension": {
                    text: "정기권 연장/결제",
                    func: () => {
                        this.props.navigation.navigate('StExtension', {})
                    },
                },
                "status": {
                    text: "정기권 현황",
                    func: () => {
                        this.props.navigation.navigate('StStatus', {})
                    },
                },
            }
        };
    }

    render() {
        const {
            seasonTicketStatus,
            seasonTicketMenu,
        } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {Platform.OS === 'ios' ? (
                    <StatusBar barStyle={'light-content'} translucent={true} />
                ) : (
                    <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
                )}
                <HeaderTab text={'정기권'} />
                <StyledSummaryContents>
                    <StStatusContainer seasonTicketStatus={seasonTicketStatus} />
                    <StMenuContainer seasonTicketMenu={seasonTicketMenu} />
                </StyledSummaryContents>
            </View>
        )
    }
};

const StyledSummaryContents = styled.View`
    padding-horizontal: 16px;
`;