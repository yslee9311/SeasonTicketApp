
import React from 'react';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../defaultText';

const DetailSellerInfo = () => {
    return (
        <DescriptionLayout>
            <DefaultText
                text={`[판매자명]`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`주식회사 베스텔라랩`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
                marginBottom={16}
            />
            <DefaultText
                text={`[대표자]`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`정상수`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
                marginBottom={16}
            />
            <DefaultText
                text={`[사업자등록번호]`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`302-88-01107`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
                marginBottom={16}
            />
            <DefaultText
                text={`[사업장 소재지]`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`본사: 서울특별시 마포구 백범로31길 21, 5층 530호`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`지사: 경기도 안양시 동안구 엘에스로 116번길 118, 안양2차 SKV1 926호`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
                marginBottom={16}
            />
            <DefaultText
                text={`[전화번호]`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`02-6949-6858`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
        </DescriptionLayout>
    )
};

const DescriptionLayout = styled.View<{ marginTop?: number }>`
    width: 100%;
    background-color: ${colors.gray200};
    border-top-color: ${colors.gray300};
    border-top-width: 1px;
    padding: 16px;
`;

export default DetailSellerInfo;