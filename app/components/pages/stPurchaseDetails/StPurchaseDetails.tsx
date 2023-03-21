
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
} from 'react-native';

import colors from '../../../common/values/colors';

import HeaderTab from '../../molecules/headerTab';
import StDetailsInfo from '../../organisms/stPurchase/stDetailsInfo';
import BottomButton from '../../atoms/button/bottomButton';

type MyProps = {
    navigation: any
    route: any
};
type MyState = {};

export default class StPurchaseDetails extends React.Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            targetCarNum: '',
            targetName: '',
            targetPhoneNum: '',
        };
    }
    componentDidMount(): void {
        console.log(this.props.route.params);
    }

    render() {
        const {
            label,
            price,
        } = this.props.route.params
        return (
            <View style={{ flex: 1, backgroundColor: colors.white, paddingBottom: 0 }}>
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
                <StDetailsInfo
                    label={label}
                    price={price}
                    inputCarNumFunc={(text: string) => this.setState({ targetCarNum: text })}
                    inputNameFunc={(text: string) => this.setState({ targetName: text })}
                    inputPhoneNumFunc={(text: string) => this.setState({ targetPhoneNum: text })}
                />
                <BottomButton
                    text={"구매하기"}
                    textSize={16}
                    weight={'Bold'}
                    textColor={colors.white}
                    buttonColor={colors.black}
                    func={() => {
                        console.log(this.state);

                    }} />
            </View>
        )
    }
}
