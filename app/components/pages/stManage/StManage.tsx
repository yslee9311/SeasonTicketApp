
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
} from 'react-native';
import styled from 'styled-components/native';

import colors from '../../../common/values/colors';
import { getVehicleInfo, getPaymentInfo } from '../../../common/utils/server/getServer';

import HeaderTab from '../../molecules/headerTab';
import StStatusContainer from '../../organisms/stManage/stStatusContainer';
import StMenuContainer from '../../organisms/stManage/stMenuContainer';

interface serverReturnData {
    success: boolean
    lists: Array<any>
    lists_count: number
}

interface totalData {
    plate_number: string
    name: string
    phone: string
    created_on: string
    modified_on: string
    uuid: string
    no: number
    goods: string
    start_on: string
    end_on: string
    card_number: string
    amount: string
    payment_on: string
    ticket_vehicle_uuid: string
};

interface ticketStatusItem {
    text: string
    number: number
};

interface ticketStatus {
    totalVehicle: ticketStatusItem
    registered: ticketStatusItem
    registerable: ticketStatusItem
    waitPayment: ticketStatusItem
};


type MyProps = {
    navigation: any
};
type MyState = {
    totalInfo: totalData[]
    seasonTicketStatus: ticketStatus
    seasonTicketMenu: Object
};

export default class StManage extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            totalInfo: new Array(),
            seasonTicketStatus: {
                "totalVehicle": {
                    text: "전체 대수",
                    number: 0,
                },
                "registered": {
                    text: "등록 차량",
                    number: 6,
                },
                "registerable": {
                    text: "등록 가능",
                    number: 2,
                },
                "waitPayment": {
                    text: "결제 대기",
                    number: 1,
                },
            },
            seasonTicketMenu: {
                "purchase": {
                    text: "정기권 구매",
                    func: () => this.moveToNextPage('StPurchase'),
                },
                "extension": {
                    text: "정기권 연장/결제",
                    func: () => this.moveToNextPage('StExtension'),
                },
                "status": {
                    text: "정기권 현황",
                    func: () => this.moveToNextPage('StStatus'),
                },
            },
        };
    }

    componentDidMount = async () => {
        let { seasonTicketStatus } = this.state
        let vehicleInfo: serverReturnData = await getVehicleInfo()
        let paymentInfo: serverReturnData = await getPaymentInfo()
        let totalInfo = vehicleInfo.lists
        for (const vehicle of totalInfo) {
            for (const payment of paymentInfo.lists) {
                if (vehicle.uuid == payment.ticket_vehicle_uuid) {
                    Object.assign(vehicle, payment) // json 결합하여 vehicle에 입력
                    break;
                }
            }
        }
        seasonTicketStatus.totalVehicle.number = totalInfo.length
        seasonTicketStatus.registered.number = totalInfo.length
        seasonTicketStatus.registerable.number = 0
        seasonTicketStatus.waitPayment.number = 0
        this.setState({
            totalInfo,
            seasonTicketStatus,
        })
    }

    moveToNextPage = (page: string) => {
        this.props.navigation.navigate(page, page == 'StPurchase' ? {} : this.state.totalInfo) // 새로 구매의 경우 정보 필요 X
    }

    render() {
        const {
            seasonTicketStatus,
            seasonTicketMenu,
        } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {Platform.OS === 'ios' ? (
                    <StatusBar barStyle={'light-content'} translucent={true} />
                ) : (
                    <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
                )}
                <HeaderTab text={'정기권'} />
                <StyledSummaryContents>
                    <StStatusContainer seasonTicketStatus={seasonTicketStatus} />
                    <StMenuContainer seasonTicketMenu={seasonTicketMenu} />
                </StyledSummaryContents>
            </View>
        )
    }
};

const StyledSummaryContents = styled.View`
    padding-horizontal: 16px;
`;