import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { parseDate } from '@/utils';
import InfoPage from '@/components/generics/infoPage';
import PrizeHeading from '@/components/generics/prizeHeading';
import CommerceInfoBox from '@/components/generics/commerceInfoBox';
import UserInfoBox from '@/components/generics/userInfoBox';
import DateInfoBox from '@/components/generics/dateInfoBox';
import Share from '@/components/generics/share';

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 328px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

const BoxWrapper = styled(ContentWrapper)`
  row-gap: 12px;
  padding: 0;
  @media (max-width: 480px) {
    flex-grow: 1;
  }
`;

type OptionData = {
  emoji: string;
  title: string;
};

const winnerOptions: Record<number, OptionData> = {
  1: {
    emoji: '🥳',
    title: '¡Felicitaciones, Ganaste!',
  },
  2: {
    emoji: '😁',
    title: 'Este premio ya fue canjeado',
  },
  3: {
    emoji: '😧',
    title: 'Todavía no canjeaste tu premio',
  },
};

const GanadorComponent: React.FC<GanadorProps> = ({ userData }) => (
  <InfoPage isProtected>
    <ContentWrapper>
      <PrizeHeading
        {...winnerOptions[userData.status]}
        prize={userData.prize.title}
      />
      <BoxWrapper>
        {userData.status === 2 && (
          <DateInfoBox
            dateTitle="Fecha de canje:"
            dateString={parseDate(userData.updatedAt)}
          />
        )}
        {userData.status !== 2 && (
          <UserInfoBox
            email={userData.player.email}
            infoTitle="Te enviamos el código para canjear a tu email:"
            tip="Tip: revisá la carpeta de spam"
          />
        )}
        <CommerceInfoBox shop={userData.shop} />
      </BoxWrapper>
      <Share />
    </ContentWrapper>
  </InfoPage>
);

const EndScreenWrapper: React.FC = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userData')));
  }, []);

  if (user) {
    return <GanadorComponent userData={user} />;
  }
  return null;
};

export default EndScreenWrapper;
