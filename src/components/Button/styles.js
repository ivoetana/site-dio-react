import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #7f28b5;
  color: #fff;
  border: none;
  border-radius: 10px;
  margin: 0 5px;
  padding: 7px 20px;
  font-weight: 600;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    filter: brightness(1.3);
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      background-color: transparent;
      border: 1px solid #fff;

      &:hover {
        background-color: #7f28b5;
        border: 1px solid transparent;
      }
    `}
`;
