import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  margin: 0 auto;

  > div {
    border: 2px solid #dadada;
    padding: 20px;
  }
`;

const Description = styled.div`
  border-bottom: 1px solid #dadada;
  padding-bottom: 10px;
`;

const WriteAnswer = styled.div`
  text-align: center;
  padding-top: 10px;

  > button {
    margin-left: 20px;
  }
`;

const Answer = styled.div`
  text-align: center;
  font-size: 24px;
  color: #444444;
`;

const AnswerOX = styled.p`
  font-size: 50px;
  color: ${(props) => props.color};
`;

AnswerOX.defaultProps = {
  color: "blue",
};

const Styles = { Container, Description, WriteAnswer, Answer, AnswerOX };

export default Styles;
