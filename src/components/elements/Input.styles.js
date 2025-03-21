import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled.label`
  font-weight: 500;
  color: #333;
`;

export const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid ${props => (props.error ? '#ff4d4d' : '#ccc')};
  border-radius: 4px;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: ${props => (props.error ? '#ff4d4d' : '#007bff')};
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const InputErrorText = styled.span`
  color: #ff4d4d;
`;
