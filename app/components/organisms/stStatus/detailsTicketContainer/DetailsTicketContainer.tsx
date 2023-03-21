
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';
import DetailsContents from '../../../molecules/stStatus/detailsContents';

type MyProps = {
    startDate: string
    endDate: string
    seasonTicketNum: string
};
type MyState = {};

export default class DetailsTicketContainer extends React.Component<MyProps, MyState> {
    render() {
        const {
            startDate,
            endDate,
            seasonTicketNum,
        } = this.props
        return (
            <View>
                <DefaultText
                    text={"정기권 정보"}
                    size={18}
                    weight={'Bold'}
                    color={colors.black}
                    marginBottom={16}
                />
                <ContentsList>
                    <DetailsContents
                        label={"상품명"}
                        data={"월정기권"}
                    />
                    <DetailsContents
                        label={"정기권번호"}
                        data={seasonTicketNum}
                    />
                    <DetailsContents
                        label={"시작일시"}
                        data={startDate}
                    />
                    <DetailsContents
                        label={"종료일시"}
                        data={endDate}
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
