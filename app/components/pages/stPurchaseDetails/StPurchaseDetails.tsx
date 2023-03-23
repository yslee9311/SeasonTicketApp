
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
    Alert,
} from 'react-native';
import moment from 'moment';

import colors from '../../../common/values/colors';
import { checkCarNumberString } from '../../../common/utils/convertNumberAndString';
import { postVehicleInfo, postPaymentInfo } from '../../../common/utils/server/postServer'

import HeaderTab from '../../molecules/headerTab';
import StDetailsInfo from '../../organisms/stPurchase/stDetailsInfo';
import BottomButton from '../../atoms/button/bottomButton';
import { ContextConsumer } from '../../../config/contexts';

type MyProps = {
    navigation: any
    context: any
    route: any
};
type MyState = {
    targetCarNum: string
    targetName: string
    targetPhoneNum: string
};

class StPurchaseDetails extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            targetCarNum: '',
            targetName: '',
            targetPhoneNum: '',
        };
    }

    purchaseFunc = () => new Promise(async (resolve, reject) => {
        let {
            targetCarNum,
            targetName,
            targetPhoneNum,
        } = this.state;
        targetCarNum = await checkCarNumberString(targetCarNum) // 차량 번호 여부 검토 및 한글 뒤 띄어쓰기 추가
        targetPhoneNum = [targetPhoneNum.slice(0, 3), '-', targetPhoneNum.slice(3, 7), '-', targetPhoneNum.slice(7)].join('') // 휴대폰 번호의 형식으로 변경

        if (targetCarNum != "" && targetPhoneNum.length == 13) { // 차량 정보 및 이름, 휴대폰 번호가 일치하는지
            let duplicateBool = await this.checkDuplicate(targetCarNum)
            if (duplicateBool) { // 기존의 데이터들 중, 차량 번호가 중복인 경우
                Alert.alert(
                    '잘못된 차량 정보',
                    '이미 정기권이 구매된 차량 번호입니다. 기존에 등록된 차량의 경우 정기권 연장을 진행해주세요.',
                    [
                        { text: "확인", style: 'cancel', onPress: () => this.props.navigation.popToTop() },
                    ]
                );
            } else {
                const inputVehicleData = {
                    plate_number: targetCarNum,
                    name: targetName,
                    phone: targetPhoneNum
                }
                // console.log('inputVehicleData', inputVehicleData);
                let outputVehicleData = await postVehicleInfo(inputVehicleData) // 차량 정보 등록

                const { label, price } = this.props.route.params
                let startDay = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
                let endDay = moment(new Date().getTime() + 1000 * 60 * 60 * 24 * 30).format('YYYY-MM-DD HH:mm:ss')
                const inputPaymentData = {
                    ticket_vehicle_uuid_bin: outputVehicleData.uuid,
                    goods: label,
                    start_on: startDay,
                    end_on: endDay,
                    card_number: "3298400198741982",
                    amount: price.toString(),
                    payment_on: startDay,
                }
                // console.log('inputPaymentData', inputPaymentData);
                let boolSuccess = await postPaymentInfo(inputPaymentData) // 해당 차량에 대한 결제 정보 등록
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
            }
        } else {
            Alert.alert(
                '잘못된 차량 정보',
                '입력하신 차량 정보 중 잘못 입력된 정보가 있는 것으로 확인됩니다. 재입력 후 "구매하기" 버튼을 눌러주세요',
                [
                    { text: "확인", style: 'cancel', onPress: () => { } },
                ]
            );
        }
    })

    checkDuplicate = (newPlateNumber: string) => new Promise<boolean>(async (resolve, reject) => {
        let { totalInfo } = this.props.context.state
        let duplicateBool = false
        for (const value of totalInfo) {
            if (newPlateNumber == value.plate_number) {
                duplicateBool = true
            }
        }
        resolve(duplicateBool)
    })

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
                    func={() => this.purchaseFunc()}
                />
            </View>
        )
    }
}

const StPurchaseDetailsContainer = (props: {
    navigation: any;
    route: any;
}) => {
    return (
        <ContextConsumer>
            {
                (context) => (
                    <StPurchaseDetails
                        navigation={props.navigation}
                        route={props.route}
                        context={context}
                    />
                )
            }
        </ContextConsumer>
    )
}

export default StPurchaseDetailsContainer;