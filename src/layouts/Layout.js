import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
//import { GlobalStyle } from "../globalStyle";

const Container = styled.div`
  padding: 20px;
`;

const Layout = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
