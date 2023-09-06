import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Buttons/Button";
import Styles from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };
  return (
    <Styles.Container>
      <Button
        onClick={() => {
          handleClick("/list");
        }}
      >
        학습하기
      </Button>
      <Button
        onClick={() => {
          handleClick("/quiz");
        }}
      >
        문제풀기
      </Button>
      <Button
        onClick={() => {
          handleClick("/update");
        }}
      >
        목록수정
      </Button>
    </Styles.Container>
  );
};

export default Home;
