
import React from 'react';
import {
    Platform,
    StatusBar,
    View,
} from 'react-native';

import colors from '../../../common/values/colors';
import { checkShortlyBeforeExpiration } from '../../../common/utils/calculateDate';

import HeaderTab from '../../molecules/headerTab';
import ExtensionInfo from '../../organisms/stExtension/extensionInfo';
import { ContextConsumer } from '../../../config/contexts';

interface Target {
    plateNumber: string
    name: string
    phone: string
    label: string
    endOn: string
    amount: number,
}

type MyProps = {
    navigation: any
    context: any
};
type MyState = {
    extensionList: Target[]
};

class StExtension extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            extensionList: [
                // {
                //     plateNumber: "11가1111",
                //     name: "홍길동",
                //     phone: "010-1111-1111",
                //     label: "추가월정기권",
                //     endOn: "2023-04-01",
                //     amount: 88000,
                // },
            ]
        };
    }

    componentDidMount = async (): Promise<void> => {
        let { totalInfo } = this.props.context.state
        let extensionList = new Array()
        let waitPayment = await checkShortlyBeforeExpiration(totalInfo)
        
        for (const value of waitPayment) {
            let inputValue = {
                plateNumber: value.plate_number,
                name: value.name,
                phone: value.phone,
                label: value.goods,
                endOn: value.end_on.split(" ")[0],
                amount: value.amount,
            }
            extensionList.push(inputValue)
        }
        this.setState({ extensionList })
    }

    moveToDetailPage = (data: any) => {
        this.props.navigation.navigate('StExtensionDetails', data)
    }

    render() {
        const { extensionList } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: colors.white }}>
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
                <ExtensionInfo
                    extensionList={extensionList}
                    func={(data: any) => this.moveToDetailPage(data)} />
            </View>
        )
    }
}

const StExtensionContainer = (props: { navigation: any; }) => {
    return (
        <ContextConsumer>
            {
                (context) => (
                    <StExtension
                        navigation={props.navigation}
                        context={context}
                    />
                )
            }
        </ContextConsumer>
    )
}

export default StExtensionContainer;