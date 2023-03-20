
import React from 'react';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';
import StMenuItem from '../../../molecules/stManage/stMenuItem';

interface Container {
    seasonTicketMenu: Object
};

const StMenuContainer = ({
    seasonTicketMenu = {},
}: Container) => {
    return (
        <SeasonTicketMenuLayout>
            <DefaultText
                text={'정기권 관리'}
                size={18}
                weight={'Medium'}
                color={colors.black}
                marginBottom={12}
            />
            <SeasonTicketMenuContents>
                {Object.values(seasonTicketMenu).map((item, index) => {
                    return (
                        <StMenuItem
                            key={item.text}
                            title={item.text}
                            func={item.func}
                            borderTop={index == 0 ? 0 : 1} />
                    )
                })}
            </SeasonTicketMenuContents>
        </SeasonTicketMenuLayout>
    )
};

const SeasonTicketMenuLayout = styled.View`
    background-color: ${colors.white};
    padding-top: 40px;
`;
const SeasonTicketMenuContents = styled.View`
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-color: ${colors.black};
    border-bottom-color: ${colors.black};
`;

export default StMenuContainer;