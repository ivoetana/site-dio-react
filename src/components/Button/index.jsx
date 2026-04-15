import "./styles";
import { ButtonContainer } from "./styles";

const Button = ({ type = "button", variant = "primary", title, onClick }) => {
  return (
    <ButtonContainer type={type} $variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
