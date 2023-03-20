
import React from 'react';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';
import SeasonTicketStatusItem from '../../../molecules/manageSeasonTicket/seasonTicketStatusItem'

type MyProps = {
    seasonTicketStatus: Object
};
type MyState = {};

export default class SeasonTicketStatusContainer extends React.Component<MyProps, MyState> {
    render() {
        const { seasonTicketStatus } = this.props
        return (
            <SeasonTicketStatusLayout>
                <DefaultText
                    text={'정기차량 정보'}
                    size={18}
                    weight={'Medium'}
                    color={colors.black}
                    marginBottom={12}
                />
                <SeasonTicketStatusContents>
                    {Object.values(seasonTicketStatus).map((item, index) => {
                        // let data: IChartFilter = seasonTicketStatus[item] // typescript 검토 필요
                        return (
                            <SeasonTicketStatusItem
                                key={item.text}
                                title={item.text}
                                number={item.number}
                                paddingTop={index == 0 ? 0 : 8} />
                        )
                    })}
                </SeasonTicketStatusContents>
            </SeasonTicketStatusLayout>
        )
    }
};

const SeasonTicketStatusLayout = styled.View`
    background-color: ${colors.white};
    padding-top: 40px;
`;

const SeasonTicketStatusContents = styled.View`
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-color: ${colors.black};
    border-bottom-color: ${colors.black};
    padding-vertical: 24px;
`;