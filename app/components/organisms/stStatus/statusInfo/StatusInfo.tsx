
import React from 'react';
import { View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import StatusItem from '../../../molecules/stStatus/statusItem';

interface Target {
    carNum: string
    name: string
    phoneNum: string
    startDate: string
    endDate: string
    state: string
    func: Function
}

type MyProps = {
    statusList: Target[]
};
type MyState = {};

export default class ExtensionInfo extends React.Component<MyProps, MyState> {
    render() {
        const {
            statusList
        } = this.props
        return (
            <ScrollLayout>
                <View style={{ paddingBottom: getBottomSpace() }}>
                    {statusList.map((data, index) => {
                        return (
                            <StatusItem
                                key={data.carNum}
                                carNum={data.carNum}
                                name={data.name}
                                phoneNum={data.phoneNum}
                                startDate={data.startDate}
                                endDate={data.endDate}
                                state={data.state}
                                func={data.func}
                            />
                        )
                    })}
                </View>
            </ScrollLayout>
        )
    }
};

const ScrollLayout = styled.ScrollView`
    flex: 1px;
    background-color: ${colors.white};
    padding: 16px;
`;
