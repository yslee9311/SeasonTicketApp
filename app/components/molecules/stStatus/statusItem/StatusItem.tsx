
import React from 'react';
import {
    View,
} from 'react-native';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';

interface Item {
    plateNumber: string
    name: string
    phone: string
    startOn: string
    endOn: string
    state: string
    func: Function
};

const ExtensionItem = ({
    plateNumber = '',
    name = '',
    phone = '',
    startOn = '',
    endOn = '',
    state = '',
    func = () => { },
}: Item) => {
    return (
        <ButtonLayout
            onPress={() => func()}
        >
            <View
                style={{ justifyContent: 'space-between' }}>
                <DefaultText
                    text={plateNumber}
                    size={16}
                    weight={'Bold'}
                    color={colors.black}
                />
                <DefaultText
                    text={`${name}  |  ${phone}`}
                    size={14}
                    weight={'Regular'}
                    color={colors.gray400}
                />
                <DefaultText
                    text={`${state == "결제대기" ? "사용예정" : "사용중"}  |  ${startOn}~${endOn}`}
                    size={16}
                    weight={'Regular'}
                    color={colors.black}
                />
            </View>
            <View style={{ justifyContent: 'flex-start' }}>
                <DefaultText
                    text={state}
                    size={16}
                    weight={'Bold'}
                    color={colors.gray400}
                />
            </View>
        </ButtonLayout>
    )
};

const ButtonLayout = styled.TouchableOpacity`
    height: 130px;
    flex-direction: row;
    justify-content: space-between;
    padding-vertical: 22px;
    padding-horizontal: 16px;
    border-color: ${colors.black};
    border-width: 1px;
    margin-bottom: 10px;
`;

export default ExtensionItem;