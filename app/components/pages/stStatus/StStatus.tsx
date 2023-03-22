
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
} from 'react-native';

import colors from '../../../common/values/colors';

import HeaderTab from '../../molecules/headerTab';
import StatusInfo from '../../organisms/stStatus/statusInfo';
import { ContextConsumer } from '../../../config/contexts';

interface PaymentInfo {
    orderNum: string
    approvalNum: string
    paymentMethod: string
    paymentDate: string
    amount: number
}

interface Target {
    plateNumber: string
    name: string
    phone: string
    startOn: string
    endOn: string
    state: string
    seasonTicketNum?: string
    paymentInfo?: PaymentInfo
}

type MyProps = {
    navigation: any
    context: any
};
type MyState = {
    statusList: Target[]
};

class StStatus extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            statusList: new Array(),
            // statusList: [
            //     {
            //         plateNumber: "11가1111",
            //         name: "홍길동",
            //         phone: "010-1111-1111",
            //         startOn: "2023-03-23",
            //         endOn: "2023-04-22",
            //         // state: "결제대기",
            //         seasonTicketNum: "NRST194101",
            //         paymentInfo: {
            //             orderNum: "RTPC20230323110101",
            //             approvalNum: "10020001",
            //             paymentMethod: "신용카드",
            //             paymentDate: "2023-03-23 11:01",
            //             amount: 88000,
            //         },
            //     },
        };
    }

    componentDidMount(): void {
        let { totalInfo } = this.props.context.state
        let statusList = new Array()
        for (const value of totalInfo) {
            let inputValue = {
                plateNumber: value.plate_number,
                name: value.name,
                phone: value.phone,
                startOn: value.start_on.split(" ")[0],
                endOn: value.end_on.split(" ")[0],
                state: "결제완료",
                seasonTicketNum: `STVE${value.ticket_vehicle_uuid.split("-")[0]}`,
                paymentInfo: {
                    orderNum: `RTPC${value.uuid.split("-")[0]}`,
                    approvalNum: `${parseInt(value.uuid.split("-")[0].substr(0, 4), 16)}`,
                    paymentMethod: "신용카드",
                    paymentDate: value.payment_on,
                    amount: value.amount,
                },
            }
            statusList.push(inputValue)
        }
        this.setState({ statusList })
    }

    moveToDetailPage = (data: any) => {
        this.props.navigation.navigate('StStatusDetails', data)
    }

    render() {
        const { statusList } = this.state
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
                <StatusInfo
                    statusList={statusList}
                    func={(data: any) => this.moveToDetailPage(data)} />
            </View>
        )
    }
}

const StStatusContainer = (props: { navigation: any; }) => {
    return (
        <ContextConsumer>
            {
                (context) => (
                    <StStatus
                        navigation={props.navigation}
                        context={context}
                    />
                )
            }
        </ContextConsumer>
    )
}

export default StStatusContainer;