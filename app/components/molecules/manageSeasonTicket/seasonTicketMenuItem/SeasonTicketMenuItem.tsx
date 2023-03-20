
import React from 'react';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';
import IconRightArrow from '../../../../assets/images/svg/iconRightArrow'

interface Item {
    title: string,
    func: Function,
    borderTop: number,
};

const SeasonTicketMenuItem = ({
    title = '',
    func = () => {},
    borderTop = 0,
}: Item) => {
    return (
        <SeasonTicketMenuItemLayout
            borderTopWidth={borderTop}
            onPress={() => func()}
        >
            <DefaultText
                text={title}
                size={16}
                weight={'Regular'}
                color={colors.black}
            />
            <IconRightArrow />
        </SeasonTicketMenuItemLayout>
    )
};

const SeasonTicketMenuItemLayout = styled.TouchableOpacity<{ borderTopWidth?: number }>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-vertical: 16px;
    border-top-color: ${colors.gray200};
    border-top-width: ${props => props.borderTopWidth}px;
`;

export default SeasonTicketMenuItem;