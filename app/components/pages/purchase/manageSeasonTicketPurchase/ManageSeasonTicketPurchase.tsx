
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';
import SeasonTicketPurchaseContainer from '../../../organisms/manageSeasonTicketPurchase/seasonTicketPurchaseContainer';

type MyProps = {
    navigation: any
};
type MyState = {
    purchaseList: Object
};

type passData = {
    label: string
    price: number
};

export default class ManageSeasonTicketPurchase extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            purchaseList: [
                {
                    label: "월정기권",
                    price: 55000,
                    func: (data: passData) => { this.props.navigation.navigate('ManageSeasonTicketPurchaseDetails', data)},
                },
                {
                    label: "추가월정기권",
                    price: 88000,
                    func: (data: passData) => { this.props.navigation.navigate('ManageSeasonTicketPurchaseDetails', data)},
                },
            ]
        };
    }

    render() {
        const { purchaseList } = this.state
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
                        text={'정기권 구매'}
                        size={26}
                        weight={'Bold'}
                        color={colors.white}
                    />
                </StyledSummaryHeader>
                <StyledSummaryContents>
                    <SeasonTicketPurchaseContainer purchaseList={purchaseList} />
                </StyledSummaryContents>
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

const StyledSummaryContents = styled.View`
    padding-horizontal: 16px;
`;