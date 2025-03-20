import styled from "styled-components";

const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 26px;
  background: ${({ checked }) => (checked ? "#4caf50" : "#ccc")};
  border-radius: 50px;
  position: relative;
  transition: background 0.3s ease-in-out;
`;

const SwitchCircle = styled.span`
  position: absolute;
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ checked }) => (checked ? "translateX(24px)" : "translateX(2px)")};
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <SwitchContainer checked={checked} onClick={() => onChange(!checked)} >
      <HiddenCheckbox
        type="checkbox"
        checked={checked}
        readOnly
      />
      <SwitchCircle checked={checked} />
    </SwitchContainer>
  );
};

export default ToggleSwitch;
