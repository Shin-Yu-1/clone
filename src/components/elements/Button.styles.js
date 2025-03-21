import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  background: ${({ variant, backgroundColor }) =>
    variant === 'outline' ? 'transparent' : backgroundColor || '#007bff'};
  color: ${({ variant, color }) => (variant === 'outline' ? color || '#007bff' : '#fff')};
  border: ${props => (props.variant === 'outline' ? '2px solid #007bff' : 'none')};

  &:hover {
    background: ${({ variant, hoverBgColor }) =>
      variant === 'outline' ? hoverBgColor || '#007bff' : hoverBgColor || '#0056b3'};
    color: #fff;
  }

  &:active {
    box-shadow: 0 0 2px rgb(0, 0, 0, 0.5);
  }

  &:disabled {
    background: #ddd;
    color: #777;
    cursor: not-allowed;
  }
`;
