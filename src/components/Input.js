import styled, { css } from "styled-components";

const heightStyles = css`
  /*크기*/
  ${(props) =>
    props.height === "large" &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}
  ${(props) =>
    props.height === "medium" &&
    css`
      height: 2.25rem;
      font-size: 1rem;
    `}
    ${(props) =>
    props.height === "small" &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
    `}
`;
const BaseInput = ({ height, ...props }) => {
  return <input height={height} {...props}></input>;
};

export const Input = styled(BaseInput)`
  border: 1px solid #dadada;
  ${heightStyles}
`;

Input.defaultProps = {
  height: "midium",
  color: "#444444",
};
