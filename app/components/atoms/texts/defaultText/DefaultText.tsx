
import React from 'react';
import { Text } from 'react-native';

import colors from '../../../../common/values/colors';
import fonts from '../../../../common/values/fonts';

interface FullText {
    text: string,
    size: number,
    color: string,
    weight: string,
    left?: number,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    width?: number,
    opacity?: number,
    textAlign?: any,
    textDecorationLine?: any,
};

const DefaultText = ({
    text = '',
    color = colors.white,
    size = 10,
    weight = 'Regular',
    left = 0,
    marginTop = 0,
    marginBottom = 0,
    marginLeft = 0,
    marginRight = 0,
    opacity = 1,
    textAlign = 'left',
    textDecorationLine = 'none',
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
        <Text
            style={{
                fontSize: size,
                lineHeight: size * 1.3,
                fontFamily,
                includeFontPadding: false,
                color: color,
                left,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                opacity,
                textAlign,
                textDecorationLine,
            }}>{text}</Text>
    )
};

export default DefaultText;
