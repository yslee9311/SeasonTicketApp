
import React from 'react';
import {
    View,
} from 'react-native';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';
import { numberWithCommas } from '../../../../common/utils/convertNumberAndString';

interface Item {
    plateNumber: string
    name: string
    phone: string
    label: string
    endOn: string
    amount: number,
    func: Function,
};

const ExtensionItem = ({
    plateNumber = '',
    name = '',
    phone = '',
    label = '',
    endOn = '',
    amount = 0,
    func = () => { },
}: Item) => {
    let stringFromNum = numberWithCommas(amount)
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
                    text={label}
                    size={16}
                    weight={'Regular'}
                    color={colors.black}
                />
                <DefaultText
                    text={`결제기한  |  ${endOn}`}
                    size={16}
                    weight={'Regular'}
                    color={colors.black}
                />
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
                <DefaultText
                    text={`${stringFromNum}원`}
                    size={16}
                    weight={'Bold'}
                    color={colors.black}
                />
            </View>
        </ButtonLayout>
    )
};

const ButtonLayout = styled.TouchableOpacity`
    height: 130px;
    flex-direction: row;
    justify-content: space-between;
    padding-vertical: 12px;
    padding-horizontal: 16px;
    border-color: ${colors.black};
    border-width: 1px;
    margin-bottom: 10px;
`;

export default ExtensionItem;