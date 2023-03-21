
import React from 'react';
import {
    View,
} from 'react-native';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';
import { numberWithCommas } from '../../../../common/utils/convertNumberAndString'

import DetailTermsButton from '../../../atoms/button/detailTermsButton';
import DefaultText from '../../../atoms/texts/defaultText';
import DetailDescription from '../../../atoms/texts/detailDescription';
import DetailProductNotice from '../../../atoms/texts/detailProductNotice';
import DetailSellerInfo from '../../../atoms/texts/detailSellerInfo';
import DetailVehicleInfo from '../../../molecules/stExtension/detailVehicleInfo';

type MyProps = {
    label: string
    price: number
    carNum: string
    name: string
    phoneNum: string
};
type MyState = {
    boolProductNoticeVisible: boolean
    boolSellerInfoVisible: boolean
};

export default class StDetailsInfo extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            boolProductNoticeVisible: false,
            boolSellerInfoVisible: false,
        };
    }

    render() {
        const {
            label,
            price,
            carNum,
            name,
            phoneNum,
        } = this.props
        const {
            boolProductNoticeVisible,
            boolSellerInfoVisible,
        } = this.state
        let stringFromPrice = numberWithCommas(price)
        return (
            <ScrollLayout>
                <View
                    style={{
                        paddingTop: 40,
                        paddingHorizontal: 16,
                    }}>
                    <DefaultText
                        text={'안양2차 SKV1'}
                        size={18}
                        weight={'Medium'}
                        color={colors.black}
                        marginBottom={12}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderTopColor: colors.black,
                            borderTopWidth: 1,
                            paddingTop: 25,
                        }}>
                        <DefaultText
                            text={label}
                            size={18}
                            weight={'Medium'}
                            color={colors.black}
                        />
                        <DefaultText
                            text={`${stringFromPrice}원`}
                            size={18}
                            weight={'Bold'}
                            color={colors.black}
                        />
                    </View>
                </View>
                <DetailVehicleInfo
                    carNum={carNum}
                    name={name}
                    phoneNum={phoneNum}
                />
                <DetailDescription />
                <DetailTermsButton
                    text={"상품고시정보"}
                    state={boolProductNoticeVisible}
                    func={(bool: boolean) => this.setState({ boolProductNoticeVisible: bool })} />
                {this.state.boolProductNoticeVisible &&
                    <DetailProductNotice />
                }
                <DetailTermsButton
                    text={"판매자 정보"}
                    state={boolSellerInfoVisible}
                    func={(bool: boolean) => this.setState({ boolSellerInfoVisible: bool })} />
                {this.state.boolSellerInfoVisible &&
                    <DetailSellerInfo />
                }
            </ScrollLayout>
        )
    }
};

const ScrollLayout = styled.ScrollView`
    flex: 1px;
    background-color: ${colors.white};
`;
