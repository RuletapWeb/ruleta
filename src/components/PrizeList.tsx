import * as React from 'react';
import styled from 'styled-components';
import ViewWrapper from './generics/ViewWrapper';
import PrizeListItem from './generics/PrizeListItem';

type PrizeListProps = {
  title: string;
  quantity: number;
  items: any;
};
const Container = styled.div`
  width: 100%;
  background-color: #edf3fb;
  display: grid;
  place-items: center;
  padding: 1em;
  margin: 1em;
  @media (max-width: 768px) {
    justify-items: start;
    padding: 2em 1em 4em;
  }
`;
const TopDivider = styled.div`
  width: 100%;
  background-image: url('@/images/home_divider.svg');
  height: 10px;
`;
const Title = styled.h3`
  font-family: Comfortaa, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 133%;
  letter-spacing: 0.15px;
  color: #002350;
  margin: 0 0 1em;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
const PrizeList: React.FC<PrizeListProps> = ({ title, items, quantity }) => {
  const prizes = (
    <List>
      {items.slice(0, quantity).map((item) => (
        <PrizeListItem item={item} />
      ))}
    </List>
  );
  return (
    <Container>
      <Title>{title}</Title>
      {prizes}
    </Container>
  );
};
export default PrizeList;
