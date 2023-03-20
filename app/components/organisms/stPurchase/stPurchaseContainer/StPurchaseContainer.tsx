
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';
import StPurchaseItem from '../../../molecules/stPurchase/stPurchaseItem';

type MyProps = {
    purchaseList: Object
};
type MyState = {};

export default class StPurchaseContainer extends React.Component<MyProps, MyState> {
    render() {
        const { purchaseList } = this.props
        return (
            <SeasonTicketStatusLayout>
                <DefaultText
                    text={'안양2차 SKV1'}
                    size={18}
                    weight={'Medium'}
                    color={colors.black}
                    marginBottom={12}
                />
                <View>
                    {Object.values(purchaseList).map((item, index) => {
                        return (
                            <StPurchaseItem
                                key={item.label}
                                title={item.label}
                                number={item.price}
                                func={item.func}
                                marginTop={index == 0 ? 0 : 10} />
                        )
                    })}
                </View>
            </SeasonTicketStatusLayout>
        )
    }
};

const SeasonTicketStatusLayout = styled.View`
    background-color: ${colors.white};
    padding-top: 40px;
`;
