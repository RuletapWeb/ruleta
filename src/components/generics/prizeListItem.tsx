import * as React from 'react';
import styled from 'styled-components';

type PrizeListItemProps = {
  item: { logo: string; name: string };
};

const ListItem = styled.li`
  background: #ffffff;
  width: 156px;
  height: 140px;
  box-shadow: inset 0px 1px 0px #eaeaea;
  border-radius: 8px;
  font-family: Comfortaa, sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 114%;
  text-align: center;
  color: #002350;
  display: grid;
  place-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    box-shadow: 0px 2.08511px 10.4255px rgba(25, 1, 52, 0.12);
    border-radius: 8.34043px;
  }
`;

const Wrapper = styled.div`
  max-width: 90%;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: min-content max-content;
    align-items: center;
    justify-items: start;
    column-gap: 1em;
    padding: 16px 13px;
  }
`;

const Logo = styled.div<PrizeListItemProps>`
  border: 1px solid #8495aa;
  width: 32px;
  height: 32px;
  background-image: url('${(props): string =>
    props.item?.logo || `https://picsum.photos/200`}');
  background-size: cover;
  border-radius: 50%;
  margin: 0 auto 0.5em;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const PrizeListItem: React.FC<PrizeListItemProps> = ({ item }) => (
  <ListItem>
    <Wrapper>
      <Logo item={item} />
      <h5>{item.name}</h5>
    </Wrapper>
  </ListItem>
);
export default PrizeListItem;