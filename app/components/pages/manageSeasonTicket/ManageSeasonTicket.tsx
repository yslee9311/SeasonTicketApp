
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
import SeasonTicketStatusContainer from '../../organisms/manageSeasonTicket/seasonTicketStatusContainer';
import SeasonTicketMenuContainer from '../../organisms/manageSeasonTicket/seasonTicketMenuContainer';

type MyProps = {
    navigation: any
};
type MyState = {
    seasonTicketStatus: Object
    seasonTicketMenu: Object
};

export default class ManageSeasonTicket extends React.Component<MyProps, MyState> {
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
                        const { navigation } = this.props;
                        navigation.navigate('ManageSeasonTicketPurchase', {})
                    }
                },
                "extension": {
                    text: "정기권 연장/결재",
                    func: () => { },
                },
                "status": {
                    text: "정기권 현황",
                    func: () => { },
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
                <StyledSummaryHeader
                    statusBarHeight={getStatusBarHeight(true)}>
                    <DefaultText
                        text={'정기권'}
                        size={26}
                        weight={'Bold'}
                        color={colors.white}
                    />
                </StyledSummaryHeader>
                <StyledSummaryContents>
                    <SeasonTicketStatusContainer seasonTicketStatus={seasonTicketStatus} />
                    <SeasonTicketMenuContainer seasonTicketMenu={seasonTicketMenu} />
                </StyledSummaryContents>
            </View>
        )
    }
};

const StyledSummaryHeader = styled.View<{ statusBarHeight: number }>`
    height: ${props => 120 + props.statusBarHeight}px;
    background-color: ${colors.primary};
    padding: 16px;
    padding-top: ${props => props.statusBarHeight + 30}px;
`;

const StyledSummaryContents = styled.View`
    padding-horizontal: 16px;
`;