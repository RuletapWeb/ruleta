import React from 'react';
import { PageProps } from 'gatsby';
import InfoPage from '@/components/generics/infoPage';
import PrizeHeading from '@/components/generics/prizeHeading';
import CommerceInfoBox from '@/components/generics/commerceInfoBox';
import UserInfoBox from '@/components/generics/userInfoBox';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 328px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 32px 16px 50px;
    height: 100%;
  }
`;
const BoxWrapper = styled(ContentWrapper)`
  row-gap: 12px;
  padding: 0;
  @media (max-width: 480px) {
    flex-grow: 1;
  }
`;
const Ganador: React.FC<PageProps> = () => (
  <InfoPage isProtected>
    <ContentWrapper>
      <PrizeHeading
        emoji="🥳"
        title="¡Felicitaciones, Ganaste!"
        prize="Nombre premio"
      />
      <BoxWrapper>
        <UserInfoBox
          userData={{
            mail: `mail@usuario.com`,
          }}
          infoTitle="Te enviamos el código para canjear a tu email:"
          tip="Tip: revisá la carpeta de spam"
        />
        <CommerceInfoBox
          commerceData={{
            name: `McDonalds`,
            address: `Dirección 123`,
            phone: `11 0000000000000`,
            logo: {
              url: `https://pbs.twimg.com/profile_images/1397543657809620994/UbxPsEGF_400x400.png`,
            },
          }}
        />
      </BoxWrapper>
      Invitar a mis amigos
    </ContentWrapper>
  </InfoPage>
);

export default Ganador;
