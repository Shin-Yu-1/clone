import styled from 'styled-components';

export const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  max-width: 50px;
  max-height: 26px;
  background: ${({ checked }) => (checked ? '#4caf50' : '#ccc')};
  border-radius: 50px;
  position: relative;
  transition: background 0.3s ease-in-out;
`;

export const SwitchCircle = styled.span`
  position: absolute;
  width: 49%;
  height: 80%;
  max-width: 22px;
  max-height: 22px;
  background: white;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ checked }) => (checked ? 'translateX(100%)' : 'translateX(2px)')};
`;

export const HiddenCheckbox = styled.input`
  display: none;
`;
