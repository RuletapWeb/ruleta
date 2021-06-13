import React from 'react';
import styled from 'styled-components';
import { FiMapPin, FiSmartphone } from 'react-icons/fi';

type CommerceInfoBoxProps = {
  commerceData: any;
};
const Container = styled.div`
  background: #edf3fb;
  border-radius: 8px;
`;
const InfoText = styled.h6`
  font-family: Comfortaa, sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.15px;
  color: #002350;
  align-self: center;
`;
const InfoWrapper = styled.div`
  padding: 15px 16px 18px;
  display: grid;
  grid-template-columns: 32px auto;
  column-gap: 10px;
  row-gap: 1em;
`;
const CommerceWrapper = styled(InfoWrapper)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 11px 16px 8px;
`;
const CommerceLogo = styled.div<CommerceInfoBoxProps>`
  border: 1px solid #8495aa;
  width: 32px;
  height: 32px;
  background-image: url('${(props): string =>
    props.commerceData.logo.url
      ? props.commerceData.logo.url
      : `https://picsum.photos/200`}');
  background-size: cover;
  border-radius: 50%;
`;
const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  background: #6b71ff;
  display: grid;
  place-items: center;
  border-radius: 50%;
`;
const CommerceTitle = styled(InfoText)`
  font-weight: bold;
`;
const CommerceInfoBox: React.FC<CommerceInfoBoxProps> = ({ commerceData }) => (
  <Container>
    <CommerceWrapper>
      <CommerceLogo commerceData={commerceData} />
      <CommerceTitle> {commerceData.name} </CommerceTitle>
    </CommerceWrapper>
    <InfoWrapper>
      <IconContainer>
        <FiMapPin style={{ color: `white` }} />
      </IconContainer>
      <InfoText>{commerceData.address}</InfoText>
      <IconContainer>
        <FiSmartphone style={{ color: `white` }} />
      </IconContainer>
      <InfoText>{commerceData.phone}</InfoText>
    </InfoWrapper>
  </Container>
);

export default CommerceInfoBox;
