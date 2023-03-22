
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
import { ContextConsumer } from '../../../config/contexts';

interface ticketStatusItem {
    text: string
    number: number
};

interface ticketStatus {
    totalVehicle: ticketStatusItem
    registered: ticketStatusItem
    registerable: ticketStatusItem
    waitPayment: ticketStatusItem
};

type MyProps = {
    navigation: any
    context: any
};
type MyState = {
    seasonTicketStatus: ticketStatus
    seasonTicketMenu: Object
};

class StManage extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            seasonTicketStatus: {
                "totalVehicle": {
                    text: "전체 대수",
                    number: 0,
                },
                "registered": {
                    text: "등록 차량",
                    number: 0,
                },
                "registerable": {
                    text: "등록 가능",
                    number: 0,
                },
                "waitPayment": {
                    text: "결제 대기",
                    number: 0,
                },
            },
            seasonTicketMenu: {
                "purchase": {
                    text: "정기권 구매",
                    func: () => this.moveToNextPage('StPurchase'),
                },
                "extension": {
                    text: "정기권 연장/결제",
                    func: () => this.moveToNextPage('StExtension'),
                },
                "status": {
                    text: "정기권 현황",
                    func: () => this.moveToNextPage('StStatus'),
                },
            },
        };
    }

    componentDidMount = async () => {
        let totalInfo = await this.props.context.func.refreshTotalInfo()
        let { seasonTicketStatus } = this.state
        seasonTicketStatus.totalVehicle.number = totalInfo.length
        seasonTicketStatus.registered.number = totalInfo.length
        seasonTicketStatus.registerable.number = 0
        seasonTicketStatus.waitPayment.number = 0
        this.setState({ seasonTicketStatus })
    }

    moveToNextPage = (page: string) => {
        const { navigation, context } = this.props
        navigation.navigate(page, {}) // 새로 구매의 경우 정보 필요 X
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

const StManageContainer = (props: { navigation: any; }) => {
    return (
        <ContextConsumer>
            {
                (context) => (
                    <StManage
                        navigation={props.navigation}
                        context={context}
                    />
                )
            }
        </ContextConsumer>
    )
}

export default StManageContainer;