import {
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
} from '@/components/elements/Checkbox.styles';

const Checkbox = ({ checked, onChange, label }) => {
  return (
    <CheckboxWrapper>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} />
      {label && <span>{label}</span>}
    </CheckboxWrapper>
  );
};

export default Checkbox;
