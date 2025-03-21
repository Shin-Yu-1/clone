import {
  InputWrapper,
  InputLabel,
  StyledInput,
  InputErrorText,
} from '@/components/elements/Input.styles';

const Input = ({ label, error, className, ...props }) => {
  return (
    <InputWrapper className={className}>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledInput {...props} error={error} />
      {error && <InputErrorText>{error}</InputErrorText>}
    </InputWrapper>
  );
};

export default Input;
