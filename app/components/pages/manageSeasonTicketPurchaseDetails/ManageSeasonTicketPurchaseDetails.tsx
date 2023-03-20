
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
import SeasonTicketPurchaseContainer from '../../organisms/manageSeasonTicketPurchase/seasonTicketPurchaseContainer';

type MyProps = {
    navigation: any
    route: any
};
type MyState = {};

type passData = {
    label: string
    price: number
};

export default class ManageSeasonTicketPurchaseDetails extends React.Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(): void {
        console.log(this.props.route.params);
        
    }

    render() {
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
                {/* <StyledSummaryContents>
                    <SeasonTicketPurchaseContainer purchaseList={purchaseList} />
                </StyledSummaryContents> */}
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