
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../../../atoms/texts/defaultText';
import TargetCarTextInput from '../../../atoms/button/targetCarTextInput';

interface VehicleInfo {
    inputCarNumFunc: Function
    inputNameFunc: Function
    inputPhoneNumFunc: Function
};

const DetailVehicleInfo = ({
    inputCarNumFunc = () => { },
    inputNameFunc = () => { },
    inputPhoneNumFunc = () => { },
}: VehicleInfo) => {
    return (
        <DescriptionLayout>
            <View
                style={{
                    paddingTop: 40,
                    paddingBottom: 12,
                }}>
                <DefaultText
                    text={`차량 정보`}
                    size={18}
                    weight={'Medium'}
                    color={colors.black}
                />
            </View>
            <InputContainer>
                <InputLayout>
                    <DefaultText
                        text={`차량 정보`}
                        size={18}
                        weight={'Medium'}
                        color={colors.black}
                    />
                    <TargetCarTextInput
                        placeholder={"전체 차량번호"}
                        func={(text: string) => inputCarNumFunc(text)}
                    />
                </InputLayout>
                <InputLayout>
                    <DefaultText
                        text={`이름`}
                        size={18}
                        weight={'Medium'}
                        color={colors.black}
                    />
                    <TargetCarTextInput
                        func={(text: string) => inputNameFunc(text)}
                    />
                </InputLayout>
                <InputLayout>
                    <DefaultText
                        text={`휴대폰번호`}
                        size={18}
                        weight={'Medium'}
                        color={colors.black}
                    />
                    <TargetCarTextInput
                        placeholder={"숫자만 입력해 주세요."}
                        keyboardType={'numeric'}
                        func={(text: string) => inputPhoneNumFunc(text)}
                    />
                </InputLayout>
            </InputContainer>
        </DescriptionLayout>
    )
};

const DescriptionLayout = styled.View<{ marginTop?: number }>`
    width: 100%;
    border-top-color: ${colors.gray300};
    border-top-width: 1px;
    padding-horizontal: 16px;
    margin-top: 16px;
`;

const InputContainer = styled.View<{ marginTop?: number }>`
    padding-top: 40px;
    padding-bottom: 12px;
    border-top-color: ${colors.black};
    border-top-width: 1px;
    border-bottom-color: ${colors.black};
    border-bottom-width: 1px;
`;

const InputLayout = styled.View<{ marginTop?: number }>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export default DetailVehicleInfo;