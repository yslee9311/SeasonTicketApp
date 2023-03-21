
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
                <StyledSummaryHeader
                    statusBarHeight={getStatusBarHeight(true)}>
                    <DefaultText
                        text={'정기권 구매'}
                        size={26}
                        weight={'Bold'}
                        color={colors.white}
                    />
                </StyledSummaryHeader>
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

const StyledSummaryHeader = styled.View<{ statusBarHeight: number }>`
    height: ${props => 120 + props.statusBarHeight}px;
    background-color: ${colors.primary};
    padding: 16px;
    padding-top: ${props => props.statusBarHeight + 30}px;
`;