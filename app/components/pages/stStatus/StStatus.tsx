
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
import StatusInfo from '../../organisms/stStatus/statusInfo';

interface PaymentInfo {
    orderNum: string
    approvalNum: string
    paymentMethod: string
    paymentDate: string
    amount: number
}

interface Target {
    carNum: string
    name: string
    phoneNum: string
    startDate: string
    endDate: string
    state: string
    seasonTicketNum?: string
    paymentInfo?: PaymentInfo
}

type MyProps = {
    navigation: any
};
type MyState = {
    statusList: Target[]
};

export default class StStatus extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            statusList: [
                {
                    carNum: "11가1111",
                    name: "홍길동",
                    phoneNum: "010-1111-1111",
                    startDate: "2023-03-23",
                    endDate: "2023-04-22",
                    state: "결제대기",
                    seasonTicketNum: "NRST194101",
                    paymentInfo: {
                        orderNum: "RTPC20230323110101",
                        approvalNum: "10020001",
                        paymentMethod: "신용카드",
                        paymentDate: "2023-03-23 11:01",
                        amount: 88000,
                    },
                },
                {
                    carNum: "22가2222",
                    name: "아무개",
                    phoneNum: "010-2222-2222",
                    startDate: "2023-03-23",
                    endDate: "2023-04-22",
                    state: "결제완료",
                    seasonTicketNum: "NRST194102",
                    paymentInfo: {
                        orderNum: "RTPC20230323110501",
                        approvalNum: "10020002",
                        paymentMethod: "신용카드",
                        paymentDate: "2023-03-23 11:05",
                        amount: 88000,
                    },
                },
                {
                    carNum: "33가3333",
                    name: "아무개",
                    phoneNum: "010-3333-3333",
                    startDate: "2023-03-23",
                    endDate: "2023-04-22",
                    state: "결제완료",
                    seasonTicketNum: "NRST194103",
                    paymentInfo: {
                        orderNum: "RTPC20230323111101",
                        approvalNum: "10020003",
                        paymentMethod: "신용카드",
                        paymentDate: "2023-03-23 11:11",
                        amount: 88000,
                    },
                },
                {
                    carNum: "44가4444",
                    name: "아무개",
                    phoneNum: "010-4444-4444",
                    startDate: "2023-03-23",
                    endDate: "2023-04-22",
                    state: "결제완료",
                    seasonTicketNum: "NRST194104",
                    paymentInfo: {
                        orderNum: "RTPC20230323111501",
                        approvalNum: "10020004",
                        paymentMethod: "신용카드",
                        paymentDate: "2023-03-23 11:15",
                        amount: 88000,
                    },
                },
                {
                    carNum: "55가5555",
                    name: "아무개",
                    phoneNum: "010-5555-5555",
                    startDate: "2023-03-23",
                    endDate: "2023-04-22",
                    state: "결제완료",
                    seasonTicketNum: "NRST194105",
                    paymentInfo: {
                        orderNum: "RTPC20230323112101",
                        approvalNum: "10020005",
                        paymentMethod: "신용카드",
                        paymentDate: "2023-03-23 11:21",
                        amount: 88000,
                    },
                },
                {
                    carNum: "66가6666",
                    name: "아무개",
                    phoneNum: "010-6666-6666",
                    startDate: "2023-03-23",
                    endDate: "2023-04-22",
                    state: "결제완료",
                    seasonTicketNum: "NRST194106",
                    paymentInfo: {
                        orderNum: "RTPC20230323112501",
                        approvalNum: "10020006",
                        paymentMethod: "신용카드",
                        paymentDate: "2023-03-23 11:25",
                        amount: 88000,
                    },
                },
            ]
        };
    }

    moveToDetailPage = (data: any) => {
        this.props.navigation.navigate('StStatusDetails', data)
    }

    render() {
        const { statusList } = this.state
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
                        text={'정기권 현황'}
                        size={26}
                        weight={'Bold'}
                        color={colors.white}
                    />
                </StyledSummaryHeader>
                <StatusInfo
                    statusList={statusList}
                    func={(data: any) => this.moveToDetailPage(data)} />
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
