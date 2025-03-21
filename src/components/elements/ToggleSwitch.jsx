import {
  SwitchContainer,
  SwitchCircle,
  HiddenCheckbox,
} from '@/components/elements/ToggleSwitch.styles';

const ToggleSwitch = ({ checked, onChange }) => {
  const handleClick = e => {
    e.preventDefault();

    onChange(!checked);
  };

  return (
    <SwitchContainer checked={checked} onClick={handleClick}>
      <HiddenCheckbox type="checkbox" checked={checked} readOnly />
      <SwitchCircle checked={checked} />
    </SwitchContainer>
  );
};

export default ToggleSwitch;
