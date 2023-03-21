
import React from 'react';
import styled from 'styled-components/native';

import colors from '../../../../common/values/colors';

import DefaultText from '../defaultText';

const DetailProductNotice = () => {
    return (
        <DescriptionLayout>
            <DefaultText
                text={`[발행자]`}
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
                text={`[문의처]`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`고객센터(02-6949-6898)`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
                marginBottom={16}
            />
            <DefaultText
                text={`[상품 관련 안내사항]`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`(1) 유효기간 연장 및 유효기간 경과 시 보상기준`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`회사의 주차서비스 제공이 불가능하거나 그 제공이 통상보다 현저히 지체되는 경우에 한하여 유효기간을 연장해드립니다.`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
                marginBottom={16}
            />
            <DefaultText
                text={`(2) 환불조건 및 방법`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`• 환불 신청은 고객센터를 통해 신청 가능합니다.`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`• 구매일로부터 7일 이내에 환불요청 시 구매액 전액을 환불 받을 수 있습니다. 다만, 정기권을 일부 사용한 경우 "정기권 결제금액"에서 "정기권 최초 이용일로부터 청약철회일까지 이용한 총 주차시간을 시간제 일반요금으로 환산하여 공제 후 차액"을 환불합니다.`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`(단, 구매일로부터 8일 이상 경과 시에는 수수료 20%가 추가 공제됩니다)`}
                size={13}
                weight={'Regular'}
                color={colors.gray800}
            />
            <DefaultText
                text={`• 회사의 귀책사유로 주차서비스 제공이 불가능한 경우에는 최초 이용일부터 회사의 주차서비스 제공 불가시점까지 발생한 주차비용(정기권 결제금액을 일할 계산하여 산정합니다)을 공제한 차액 전부를 환불 받고 해지할 수 있습니다.`}
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

export default DetailProductNotice;