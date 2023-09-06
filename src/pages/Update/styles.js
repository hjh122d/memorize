import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const listTb = styled.table`
  width: 100%;
  margin-top: 20px;

  thead td {
    text-align: center;
  }
  td {
    border: 1px solid #dadada;
    padding: 3px 5px;
    text-align: center;
  }

  td:nth-of-type(3) {
    text-align: left;
  }
  td:nth-of-type(2),
  td:nth-of-type(4) {
    width: 10%;
  }
`;

const Styles = { Container, listTb };

export default Styles;
