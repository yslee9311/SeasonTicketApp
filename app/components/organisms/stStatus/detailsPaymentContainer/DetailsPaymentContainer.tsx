
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { numberWithCommas } from '../../../../common/utils/convertNumberAndString';
import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';
import DetailsContents from '../../../molecules/stStatus/detailsContents';

type MyProps = {
    orderNum: string
    approvalNum: string
    paymentMethod: string
    paymentDate: string
    amount: number
};
type MyState = {};

export default class DetailsPaymentContainer extends React.Component<MyProps, MyState> {
    render() {
        const {
            orderNum,
            approvalNum,
            paymentMethod,
            paymentDate,
            amount,
        } = this.props
        let stringFromNumber = numberWithCommas(amount)
        return (
            <View>
                <DefaultText
                    text={"정기권 정보"}
                    size={18}
                    weight={'Bold'}
                    color={colors.black}
                    marginBottom={16}
                />
                <ContentsList>
                    <DetailsContents
                        label={"주문번호"}
                        data={orderNum}
                    />
                    <DetailsContents
                        label={"승인번호"}
                        data={approvalNum}
                    />
                    <DetailsContents
                        label={"결제수단"}
                        data={paymentMethod}
                    />
                    <DetailsContents
                        label={"결제금액"}
                        data={`${stringFromNumber}원`}
                    />
                    <DetailsContents
                        label={"결제일시"}
                        data={paymentDate}
                    />
                </ContentsList>
            </View>
        )
    }
};

const ContentsList = styled.View`
    border-top-color: ${colors.black};
    border-top-width: 1px;
    border-bottom-color: ${colors.black};
    border-bottom-width: 1px;
    padding-vertical: 16px;
    margin-bottom: 40px;
`;
