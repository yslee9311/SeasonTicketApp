
import React from 'react';
import { TextInput } from 'react-native';
import type { KeyboardType } from 'react-native';

import colors from '../../../../common/values/colors';
import fonts from '../../../../common/values/fonts';

interface FullText {
    placeholder?: string
    keyboardType?: KeyboardType
    func: Function
};

const TargetCarTextInput = ({
    placeholder = '',
    keyboardType = 'default',
    func = () => { },
}: FullText) => {
    let fontFamily = fonts.spoqaMedium
    return (
        <TextInput
            style={{
                width: '60%',
                height: 42,
                borderColor: colors.black,
                borderWidth: 1,
                paddingHorizontal: 16,
                fontSize: 16,
                fontFamily,
            }}
            placeholder={placeholder}
            keyboardType={keyboardType}
            placeholderTextColor={colors.gray400}
            onChangeText={(text) => func(text)}
        />
    )
};

export default TargetCarTextInput;
