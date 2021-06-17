import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { navigate, PageProps } from 'gatsby';

import {
  inputChangeHandler,
  navigateToNextView,
  handleFetch,
  postOptions,
  isValid,
} from '@/utils';

// import BenefitsArray from '@/components/home/benefitsArray';
import PrizeList from '@/components/prizeList';
import DownloadLinks from '@/components/home/downloadLinks';
import TextInput from '@/components/generics/textInput';
import Footer from '@/components/home/footer';
import Header from '@/components/home/header';
import Button from '@/components/home/button';
import Layout from '@/components/layout';

const MainWrapper = styled.main`
  background: #edf3fb;
  padding: 50px 16px 0px;
`;

const TitleText = styled.div`
  --text-spacing: 12px;
  width: 100%;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  padding: var(--text-spacing) 0;
`;

const BenefitsText = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #002350;
  text-align: center;
`;

const TextInputWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SecondaryText = styled(TitleText)`
  font-size: 24px;
  line-height: 32px;
`;

const Spacer = styled.div<{ space: number }>`
  height: ${({ space }) => space}px;
`;

const setUserData = (data: { email: string; phone: StrNum }): void =>
  localStorage.setItem('userData', JSON.stringify(data));
const setPrizesData = (data: any): void =>
  localStorage.setItem('prizesData', JSON.stringify(data));

const Home: React.FC<PageProps> = () => {
  const [phone, setPhone] = useState({ value: '', valid: false });
  const [email, setEmail] = useState({ value: '', valid: false });
  const [prizes, setPrizes] = useState([]);

  const handleOnClick = async () => {
    try {
      const playUser = await handleFetch(
        '/players/register',
        postOptions({ email: email.value, phone: phone.value }),
      );
      setUserData(playUser);
      navigateToNextView();
    } catch (err) {
      navigate('/error');
    }
  };

  const getPrizes = async () => {
    const premios = await handleFetch('/prizes');
    setPrizes(premios);
    setPrizesData(premios);
  };

  useEffect(() => {
    getPrizes();
  }, []);

  return (
    <Layout>
      <Header>
        <SecondaryText>
          Jugá a la Ruletap y ganá premios en comercios
        </SecondaryText>
        <TextInputWrapper>
          <TextInput
            type="email"
            value={email.value}
            label="Email"
            onChange={inputChangeHandler(setEmail, isValid.email)}
            infoText="Acá te enviaremos el código de canje"
          />
          <TextInput
            type="number"
            value={phone.value}
            onChange={inputChangeHandler(setPhone, isValid.phone)}
            label="Número de celular"
            infoText="Con código de área sin el 0 y sin el 15"
          />
          <Spacer space={30} />
          <Button
            onClick={handleOnClick}
            disabled={prizes?.length < 6 || !phone.valid || !email.valid}
          >
            Jugar a la RuleTap
          </Button>
        </TextInputWrapper>
      </Header>
      <MainWrapper>
        {prizes?.length > 5 && (
          <PrizeList title="Premios disponibles" items={prizes} />
        )}
        <Spacer space={60} />
        <BenefitsText>
          Descargá Tap y ganá $200 en tu primera recarga
        </BenefitsText>
        <Spacer space={30} />
        <DownloadLinks />
      </MainWrapper>
      <Footer />
    </Layout>
  );
};

export default Home;
