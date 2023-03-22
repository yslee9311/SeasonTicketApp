
import React from 'react';
import { View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import StatusItem from '../../../molecules/stStatus/statusItem';

interface Target {
    plateNumber: string
    name: string
    phone: string
    startOn: string
    endOn: string
    state: string
}

type MyProps = {
    statusList: Target[]
    func: Function
};
type MyState = {};

export default class ExtensionInfo extends React.Component<MyProps, MyState> {
    render() {
        const {
            statusList,
            func,
        } = this.props
        return (
            <ScrollLayout>
                <View style={{ paddingBottom: getBottomSpace() }}>
                    {statusList.map((data, index) => {
                        return (
                            <StatusItem
                                key={data.plateNumber}
                                plateNumber={data.plateNumber}
                                name={data.name}
                                phone={data.phone}
                                startOn={data.startOn}
                                endOn={data.endOn}
                                state={data.state}
                                func={() => func(data)}
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
