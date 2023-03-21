
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
} from 'react-native';
import styled from 'styled-components/native';

import colors from '../../../common/values/colors';

import HeaderTab from '../../molecules/headerTab';
import StPurchaseContainer from '../../organisms/stPurchase/stPurchaseContainer';

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

export default class StPurchase extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            purchaseList: [
                {
                    label: "월정기권",
                    price: 55000,
                    func: (data: passData) => { this.props.navigation.navigate('StPurchaseDetails', data) },
                },
                {
                    label: "추가월정기권",
                    price: 88000,
                    func: (data: passData) => { this.props.navigation.navigate('StPurchaseDetails', data) },
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
                <HeaderTab
                    text={'정기권 구매'}
                    backButtonVisible={true}
                    backFunc={() => this.props.navigation.goBack()}
                />
                <StyledSummaryContents>
                    <StPurchaseContainer purchaseList={purchaseList} />
                </StyledSummaryContents>
            </View>
        )
    }
}

const StyledSummaryContents = styled.View`
    padding-horizontal: 16px;
`;