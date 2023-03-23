
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
} from 'react-native';

import colors from '../../../common/values/colors';

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
                    func={() => this.props.navigation.navigate("StPurchaseCompleted", {})}
                />
            </View>
        )
    }
}
