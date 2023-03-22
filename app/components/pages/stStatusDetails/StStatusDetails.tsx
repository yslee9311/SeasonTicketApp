
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import colors from '../../../common/values/colors';

import HeaderTab from '../../molecules/headerTab';
import DetailsBasicContainer from '../../organisms/stStatus/detailsBasicContainer';
import DetailsTicketContainer from '../../organisms/stStatus/detailsTicketContainer';
import DetailsPaymentContainer from '../../organisms/stStatus/detailsPaymentContainer';

import { ContextConsumer } from '../../../config/contexts';

type MyProps = {
    navigation: any
    context: any
    route: any
};
type MyState = {};

class StStatusDetails extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const {
            plateNumber,
            name,
            phone,
            startOn,
            endOn,
            seasonTicketNum,
            paymentInfo,
        } = this.props.route.params
        return (
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {Platform.OS === 'ios' ? (
                    <StatusBar barStyle={'light-content'} translucent={true} />
                ) : (
                    <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
                )}
                <HeaderTab
                    text={'정기권 현황'}
                    backButtonVisible={true}
                    backFunc={() => this.props.navigation.goBack()}
                />
                <ScrollLayout>
                    <View style={{ paddingBottom: getBottomSpace() }}>
                        <DetailsBasicContainer
                            plateNumber={plateNumber}
                            name={name}
                            phone={phone}
                        />
                        <DetailsTicketContainer
                            startOn={startOn}
                            endOn={endOn}
                            seasonTicketNum={seasonTicketNum}
                        />
                        <DetailsPaymentContainer
                            orderNum={paymentInfo.orderNum}
                            approvalNum={paymentInfo.approvalNum}
                            paymentMethod={paymentInfo.paymentMethod}
                            paymentDate={paymentInfo.paymentDate}
                            amount={paymentInfo.amount}
                        />
                    </View>
                </ScrollLayout>
            </View>
        )
    }
}

const ScrollLayout = styled.ScrollView`
    flex: 1px;
    background-color: ${colors.white};
    padding: 16px;
`;

const StStatusDetailsContainer = (props: {
    navigation: any;
    route: any;
}) => {
    return (
        <ContextConsumer>
            {
                (context) => (
                    <StStatusDetails
                        navigation={props.navigation}
                        route={props.route}
                        context={context}
                    />
                )
            }
        </ContextConsumer>
    )
}

export default StStatusDetailsContainer;