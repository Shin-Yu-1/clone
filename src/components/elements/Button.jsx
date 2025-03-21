import { StyledButton } from '@/components/elements/Button.styles';

const Button = ({ children, variant = 'default', className, ...props }) => {
  return (
    <StyledButton variant={variant} className={className} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
