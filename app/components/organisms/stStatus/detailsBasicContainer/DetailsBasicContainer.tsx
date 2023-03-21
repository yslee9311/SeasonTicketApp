
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';
import DetailsContents from '../../../molecules/stStatus/detailsContents';

type MyProps = {
    carNum: string
    name: string
    phoneNum: string
};
type MyState = {};

export default class DetailsBasicContainer extends React.Component<MyProps, MyState> {
    render() {
        const {
            carNum,
            name,
            phoneNum,
        } = this.props
        return (
            <View>
                <DefaultText
                    text={"기본 정보"}
                    size={18}
                    weight={'Bold'}
                    color={colors.black}
                    marginBottom={16}
                />
                <ContentsList>
                    <DetailsContents
                        label={"차량번호"}
                        data={carNum}
                    />
                    <DetailsContents
                        label={"이름"}
                        data={name}
                    />
                    <DetailsContents
                        label={"휴대폰번호"}
                        data={phoneNum}
                    />
                </ContentsList>
            </View>
        )
    }
};

const ContentsList = styled.View`
    border-top-color: ${colors.black};
    border-top-width: 1px;
    border-bottom-color: ${colors.black};
    border-bottom-width: 1px;
    padding-vertical: 16px;
    margin-bottom: 40px;
`;
