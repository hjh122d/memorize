import styled from "styled-components";
import Spinner from "../Spinner";

function BaseButton({ pending, children, ...props }) {
  return (
    <button {...props}>
      {children}
      {pending && <Spinner pending={pending} />}
    </button>
  );
}

export const Button = styled(BaseButton)`
  background-color: #f6f6f6;
  font-size: 16px;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: ${({ round }) => (round ? `9999px` : `5px`)};
  font-family: "Atkinson Hyperlegible", sans-serif;
`;
