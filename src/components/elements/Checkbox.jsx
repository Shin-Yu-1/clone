import styled from "styled-components";

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ checked }) => (checked ? "#007BFF" : "#ccc")};
  background-color: ${({ checked }) => (checked ? "#007BFF" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;

  &:after {
    content: "✔";
    color: white;
    display: ${({ checked }) => (checked ? "block" : "none")};
  }
`;

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
