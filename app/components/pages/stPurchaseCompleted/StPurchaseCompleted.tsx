
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
    BackHandler,
} from 'react-native';
import styled from 'styled-components/native';

import colors from '../../../common/values/colors';
import DefaultText from '../../atoms/texts/defaultText';

import HeaderTab from '../../molecules/headerTab';

type MyProps = {
    navigation: any
};
type MyState = {};

export default class StPurchaseCompleted extends React.Component<MyProps, MyState> {
    backHandler: any;
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', function () {
            return true; // prevent Android hardware back button
        });
    }

    componentWillUnmount(): void {
        this.backHandler.remove(); // Remove when off screen
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {Platform.OS === 'ios' ? (
                    <StatusBar barStyle={'light-content'} translucent={true} />
                ) : (
                    <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
                )}
                <HeaderTab
                    text={'정기권 구매 완료'}
                    backButtonVisible={true}
                    backFunc={() => this.props.navigation.popToTop()}
                />
                <ContentsContainer>
                    <DefaultText
                        text={"구매 완료"}
                        color={colors.black}
                        size={24}
                        weight={"Medium"}
                        marginBottom={30}
                    />
                    <Button
                        onPress={() => this.props.navigation.popToTop()}>
                        <DefaultText
                            text={"돌아가기"}
                            color={colors.black}
                            size={16}
                            weight={"Medium"}
                        />
                    </Button>
                </ContentsContainer>
            </View>
        )
    }
};

const ContentsContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Button = styled.TouchableOpacity`
    width: 120px;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.gray200}
    border-radius: 10px;
    border-width: 1px;
    border-color: ${colors.gray400}
`;