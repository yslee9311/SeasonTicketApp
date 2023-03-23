
import React from 'react';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import ExtensionItem from '../../../molecules/stExtension/extensionItem';

interface Target {
    plateNumber: string
    name: string
    phone: string
    label: string
    endOn: string
    amount: number,
}

type MyProps = {
    extensionList: Target[]
    func: Function
};
type MyState = {};

export default class ExtensionInfo extends React.Component<MyProps, MyState> {
    render() {
        const {
            extensionList,
            func,
        } = this.props
        return (
            <ScrollLayout>
                {extensionList.map((data, index) => {
                    return (
                        <ExtensionItem
                            key={data.plateNumber}
                            plateNumber={data.plateNumber}
                            name={data.name}
                            phone={data.phone}
                            label={data.label}
                            endOn={data.endOn}
                            amount={data.amount}
                            func={() => func(data)}
                        />
                    )

                })}
            </ScrollLayout>
        )
    }
};

const ScrollLayout = styled.ScrollView`
    flex: 1px;
    background-color: ${colors.white};
    padding: 16px;
`;
