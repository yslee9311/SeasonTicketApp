
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import colors from '../../../../common/values/colors';
import fonts from '../../../../common/values/fonts';

interface FullText {
    text: string
    textSize: number
    weight: string
    textColor: string
    buttonColor: string
    func: Function
};

const BottomButton = ({
    text = '구매하기',
    textSize = 16,
    weight = 'Bold',
    textColor = colors.white,
    buttonColor = colors.black,
    func = () => { },
}: FullText) => {
    let fontFamily
    switch (weight) {
        case 'Bold': {
            fontFamily = fonts.spoqaBold
            break;
        }
        case 'Medium': {
            fontFamily = fonts.spoqaMedium
            break;
        }
        case 'Regular': {
            fontFamily = fonts.spoqaRegular
            break;
        }
        case 'Light': {
            fontFamily = fonts.spoqaLight
            break;
        }
        case 'Thin': {
            fontFamily = fonts.spoqaThin
            break;
        }
        default:
            break;
    }
    return (
        <TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 56,
                width: '100%',
                backgroundColor: buttonColor,
                marginBottom: getBottomSpace(),
            }}
            onPress={() => func()}>
            <Text
                style={{
                    fontSize: textSize,
                    lineHeight: textSize * 1.3,
                    fontFamily,
                    includeFontPadding: false,
                    color: textColor,
                }}>{text}</Text>
        </TouchableOpacity>
    )
};

export default BottomButton;
