import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #dadada;
`;

const NavList = styled.ul`
  display: flex;
  align-item: center;
  justify-content: center;
  gap: 40px;
`;

const Nav = styled.li`
  font-weignt: bole;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;

const Styles = {
  Container,
  NavList,
  Nav,
};

export default Styles;
