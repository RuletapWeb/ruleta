import * as React from 'react';
import styled from 'styled-components';
import { FiMail, FiSmartphone } from 'react-icons/fi';

type TextInputProps = {
  type: string;
  placeholder: string;
  icon?: string;
  infoText?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  type,
  placeholder,
  icon,
  infoText,
}) => {
  const InputWrapper = styled.div`
    background-color: #ffffff;
    width: 60%;
    display: grid;
    grid-template-columns: 1fr min-content;
    column-gap: 1em;
    align-items: center;
    border-radius: 6px;
    padding: 0.5em 1em;
  `;
  const Input = styled.input`
    border: 0;
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    line-height: 137%;
    letter-spacing: 0.15px;
    color: #002350;
  `;
  const InfoText = styled.span`
    display: block;
    font-family: Open Sans, sans-serif;
    font-size: 12px;
    color: #ffffff;
    padding: 0.5em 1em;
  `;
  return (
    <>
      <InputWrapper>
        <Input type={type} placeholder={placeholder} required />
        {icon === `mail` && <FiMail />}
        {icon === `phone` && <FiSmartphone />}
      </InputWrapper>
      {infoText && <InfoText> {infoText} </InfoText>}
    </>
  );
};
export default TextInput;
