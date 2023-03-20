
import React from 'react';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';

interface Item {
    title: string,
    number: number,
    paddingTop: number,
};

const StStatusItem = ({
    title = '',
    number = 0,
    paddingTop = 0,
}: Item) => {
    return (
        <SeasonTicketStatusItemLayout paddingTop={paddingTop}>
            <DefaultText
                text={title}
                size={16}
                weight={'Regular'}
                color={colors.black}
            />
            <DefaultText
                text={`${number}대`}
                size={16}
                weight={'Regular'}
                color={colors.black}
            />
        </SeasonTicketStatusItemLayout>
    )
};

const SeasonTicketStatusItemLayout = styled.View<{ paddingTop?: number }>`
    flex-direction: row;
    justify-content: space-between;
    padding-top: ${props => props.paddingTop}px;
`;

export default StStatusItem;