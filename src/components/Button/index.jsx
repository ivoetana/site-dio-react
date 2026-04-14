import "./styles";
import { ButtonContainer } from "./styles";

const Button = ({ variant = "primary", title, onClick }) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
