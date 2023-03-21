
import React from 'react';
import { View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

import colors from '../../../common/values/colors';

import DefaultText from '../../atoms/texts/defaultText';
import IconBack from '../../../assets/images/svg/iconBack'

interface Item {
    text: string
    backButtonVisible?: boolean
    backFunc?: Function
};

const HeaderTab = ({
    text = '정기권',
    backButtonVisible = false,
    backFunc = () => { },
}: Item) => {
    return (
        <Header
            statusBarHeight={getStatusBarHeight(true)}>
            <DefaultText
                text={text}
                size={26}
                weight={'Bold'}
                color={colors.white}
            />
            {backButtonVisible &&
                <BackButton
                    onPress={() => backFunc()}>
                    <IconBack />
                </BackButton>
            }
        </Header>
    )
};

const Header = styled.View<{ statusBarHeight: number }>`
    flex-direction: column-reverse;
    height: ${props => 120 + props.statusBarHeight}px;
    background-color: ${colors.primary};
    padding: 16px;
    padding-top: ${props => props.statusBarHeight + 20}px;
    justify-content: space-between;
`;

const BackButton = styled.TouchableOpacity`
    height: 32px;
    width: 32px;
    justify-content: center;
    align-items: center;
`;

export default HeaderTab;