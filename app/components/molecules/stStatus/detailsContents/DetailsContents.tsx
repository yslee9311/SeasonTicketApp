
import React from 'react';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';

interface Item {
    label: string
    data: string
    disabled?: boolean
    func?: Function
};

const DetailsContents = ({
    label = '',
    data = '',
    disabled = true,
    func = () => { },
}: Item) => {
    return (
        <ButtonLayout
            disabled={disabled}
            onPress={() => func()}>
            <DefaultText
                text={label}
                size={16}
                weight={'Medium'}
                color={colors.gray400}
            />
            <DefaultText
                text={data}
                size={16}
                weight={'Medium'}
                color={colors.black}
            />
        </ButtonLayout>
    )
};

const ButtonLayout = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    margin-vertical: 4px;
`;

export default DetailsContents;