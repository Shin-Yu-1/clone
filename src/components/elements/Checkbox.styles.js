import styled from 'styled-components';

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  user-select: none;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ checked }) => (checked ? '#007BFF' : '#ccc')};
  background-color: ${({ checked }) => (checked ? '#007BFF' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;

  &:after {
    content: '✔';
    color: white;
    display: ${({ checked }) => (checked ? 'block' : 'none')};
  }
`;
