import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-weight: 500;
  color: #333;
`;

const StyledInput = styled.input`
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

const ErrorText = styled.span`
  color: #ff4d4d;
`;

const Input = ({ label, error, className, ...props }) => {
  return (
    <Wrapper className={className}>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} error={error} />
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
};

export default Input;
