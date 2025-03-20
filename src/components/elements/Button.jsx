import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  
  background: ${(props) => (props.variant === "outline" ? "transparent" : "#007bff")};
  color: ${(props) => (props.variant === "outline" ? "#007bff" : "#fff")};
  border: ${(props) => (props.variant === "outline" ? "2px solid #007bff" : "none")};

  &:hover {
    background: ${(props) =>
      props.variant === "outline" ? "#007bff" : "#0056b3"};
    color: #fff;
  }
  
  &:active {
    box-shadow: 0 0 2px rgb(0,0,0,0.5);
  }

  &:disabled {
    background: #ddd;
    color: #777;
    cursor: not-allowed;
  }
`;

const Button = ({ children, variant = "default", className, ...props }) => {
  return (
    <StyledButton variant={variant} className={className} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;