
import React from 'react';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import ExtensionItem from '../../../molecules/stExtension/extensionItem';

interface Target {
    carNum: string
    name: string
    phoneNum: string
    label: string
    deadline: string
    price: number,
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
                            key={data.carNum}
                            carNum={data.carNum}
                            name={data.name}
                            phoneNum={data.phoneNum}
                            label={data.label}
                            deadline={data.deadline}
                            price={data.price}
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
