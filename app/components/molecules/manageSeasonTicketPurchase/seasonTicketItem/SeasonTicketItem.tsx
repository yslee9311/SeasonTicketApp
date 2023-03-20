
import React from 'react';
import styled from 'styled-components/native';

import { numberWithCommas } from '../../../../common/utils/convertNumberAndString';
import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';

interface Item {
    title: string,
    number: number,
    func: Function,
    marginTop: number,
};

const SeasonTicketStatusItem = ({
    title = '',
    number = 0,
    func = () => { },
    marginTop = 0,
}: Item) => {
    let stringFromNum = numberWithCommas(number)
    return (
        <SeasonTicketStatusItemLayout
            marginTop={marginTop}
            onPress={() => func()}>
            <DefaultText
                text={title}
                size={22}
                weight={'Regular'}
                color={colors.black}
            />
            <DefaultText
                text={`${stringFromNum}원`}
                size={22}
                weight={'Bold'}
                color={colors.black}
            />
        </SeasonTicketStatusItemLayout>
    )
};

const SeasonTicketStatusItemLayout = styled.TouchableOpacity<{ marginTop?: number }>`
    border-width: 1px;
    border-color: ${colors.black};
    flex-direction: row;
    justify-content: space-between;
    padding-vertical: 24px;
    padding-horizontal: 12px;
    margin-top: ${props => props.marginTop}px;
`;

export default SeasonTicketStatusItem;