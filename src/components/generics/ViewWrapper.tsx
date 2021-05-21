import * as React from 'react';
import styled from 'styled-components';

type WrapperProps = {
  dMaxWidth?: number;
  mMaxWidth?: number;
  children: React.ReactNode;
};

const ViewWrapper: React.FC<WrapperProps> = ({
  dMaxWidth,
  mMaxWidth,
  children,
}) => {
  const Container = styled.div<WrapperProps>`
    width: 100%;
    max-width: ${(props): string => String(props.dMaxWidth)}px;
  `;
  return <Container dMaxWidth={dMaxWidth}>{children}</Container>;
};
export default ViewWrapper;
