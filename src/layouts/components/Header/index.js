import { Link } from "react-router-dom";
import Styles from "./styles";

const Header = () => {
  const navList = [
    { title: "Home", url: "/" },
    { title: "학습하기", url: "/list" },
    { title: "문제풀기", url: "/quiz" },
    { title: "목록수정", url: "/update" },
  ];
  return (
    <Styles.Container>
      <Styles.NavList>
        {navList.map((item, index) => {
          return (
            <Styles.Nav key={index + "nav"}>
              <Link to={item.url}>{item.title}</Link>
            </Styles.Nav>
          );
        })}
      </Styles.NavList>
    </Styles.Container>
  );
};
export default Header;
