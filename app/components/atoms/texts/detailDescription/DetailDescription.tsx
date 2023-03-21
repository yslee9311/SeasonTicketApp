
import React from 'react';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../defaultText';

const DetailDescription = () => {
    return (
        <DescriptionLayout>
            <DefaultText
                text={`[상품안내]`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`• 이용기간: 시작일부터 31일간`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`• 이용요일: 전일`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`• 이용시간: 24시간`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
                marginBottom={16}
            />
            <DefaultText
                text={`[이용안내]`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`• 정기권 신규 구매 시 현재 날짜 기준으로 +5일까지 시작일 선택이 가능합니다.`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`• 연장 정기권은 만료일 5일전부터 가능하며, 기간 내 결제하지 않으시면 취소됩니다.`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`• 정기권 구매 후 차량 번호 변경은 고객센터를 통해서만 가능합니다.`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
                marginBottom={16}
            />
            <DefaultText
                text={`[유의사항]`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`입주사 관계자만 사용할 수 있는 정기권입니다. 제3자에게 양도 또는 재 판매할 수 없으며, 상품에 따라 이용 시간, 기간, 요일 등이 상이할 수 있습니다.`}
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
    margin-top: 16px;
`;

export default DetailDescription;