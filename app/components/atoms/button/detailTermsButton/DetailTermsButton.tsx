
import React from 'react';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import IconArrowDown from '../../../../assets/images/svg/iconArrowDown'
import IconArrowUp from '../../../../assets/images/svg/iconArrowUp'
import DefaultText from '../../../atoms/texts/defaultText';

interface TermButton {
    text: string
    state: boolean
    func: Function
};

const DetailTermsButton = ({
    text = "",
    state = false,
    func = () => { },
}: TermButton) => {
    return (
        <DescriptionLayout
            onPress={() => {
                func(state == false ? true : false)
            }}>
            <DefaultText
                text={`${text}`}
                size={16}
                weight={"Regular"}
                color={colors.gray800}
            />
            {state == false ?
                <IconArrowDown />
                :
                <IconArrowUp />
            }
        </DescriptionLayout>
    )
};

const DescriptionLayout = styled.TouchableOpacity<{ marginTop?: number }>`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 16px;
`;

export default DetailTermsButton;