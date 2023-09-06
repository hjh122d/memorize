import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 600px;
  > div {
    display: flex;
    gap: 20px;
  }
  > div:first-child {
    padding: 0 80px;
    justify-content: space-between;
  }
`;

const TextBox = styled.div`
  border: 2px solid #dadada;
  padding: 20px;
  width: 100%;
`;

const Keyword = styled.div`
  border-bottom: 1px solid #dadada;
  text-align: center;
  padding-bottom: 10px;
`;

const Content = styled.div`
  padding-top: 10px;
`;

const Styles = {
  Container,
  Keyword,
  Content,
  TextBox,
  ButtonContainer,
};

export default Styles;
