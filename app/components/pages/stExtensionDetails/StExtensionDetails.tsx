
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
    Alert,
} from 'react-native';
import moment from 'moment';

import colors from '../../../common/values/colors';
import { putPaymentInfo } from '../../../common/utils/server/putServer'

import HeaderTab from '../../molecules/headerTab';
import StDetailsInfo from '../../organisms/stExtension/stDetailsInfo';
import BottomButton from '../../atoms/button/bottomButton';

type MyProps = {
    navigation: any
    route: any
};
type MyState = {};

export default class StExtensionDetails extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
    }

    purchaseFunc = () => new Promise(async (resolve, reject) => {
        let { endOnFull, uuid } = this.props.route.params
        let updateStartOn = endOnFull
        let updateEndOn = moment(new Date(endOnFull).getTime() + 1000 * 60 * 60 * 24 * 30).format('YYYY-MM-DD HH:mm:ss')
        const editDate = {
            start_on: updateStartOn,
            end_on: updateEndOn,
        }
        let boolSuccess = await putPaymentInfo(uuid, editDate)
        if (boolSuccess) {
            this.props.navigation.navigate("StPurchaseCompleted", {})
        } else {
            Alert.alert(
                '결제 오류',
                '결제 중 오류가 발생하였습니다. 처음 화면에서 다시 결제를 진행해주세요.',
                [
                    { text: "확인", style: 'cancel', onPress: () => this.props.navigation.popToTop() },
                ]
            );
        }
    })

    render() {
        const {
            label,
            amount,
            plateNumber,
            name,
            phone,
        } = this.props.route.params
        return (
            <View style={{ flex: 1, backgroundColor: colors.white, paddingBottom: 0 }}>
                {Platform.OS === 'ios' ? (
                    <StatusBar barStyle={'light-content'} translucent={true} />
                ) : (
                    <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
                )}
                <HeaderTab
                    text={'정기권 연장/결제'}
                    backButtonVisible={true}
                    backFunc={() => this.props.navigation.goBack()}
                />
                <StDetailsInfo
                    label={label}
                    amount={amount}
                    plateNumber={plateNumber}
                    name={name}
                    phone={phone}
                />
                <BottomButton
                    text={"구매하기"}
                    textSize={16}
                    weight={'Bold'}
                    textColor={colors.white}
                    buttonColor={colors.black}
                    func={() => this.purchaseFunc()}
                />
            </View>
        )
    }
}
