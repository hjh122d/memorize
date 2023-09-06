import { useEffect, useState } from "react";

import Styles from "./styles";
import { Button } from "../../components/Buttons/Button";
import { BookmarkTrue, BookmarkFalse } from "../../components/Bookmark";
import { useRecoilValue } from "recoil";
import ListState from "../../States/ListState";

const List = () => {
  const [bookmark, setBookmark] = useState([]);
  const [number, setNumber] = useState(0);
  const [bookNumber, setBookNumber] = useState(0);
  const [mode, setMode] = useState("All");
  const [isBookmark, setIsBookmark] = useState(false);
  //const [list, setList] = useRecoilState(ListState);

  const list = useRecoilValue(ListState);

  const HandleClickMode = (type) => {
    setMode(type);
    if (type === "All") {
      setNumber(0);
    } else {
      if (bookmark.length < 1) {
        alert("북마크가 없습니다.");
        setMode("All");
      } else {
        setBookNumber(0);
        setNumber(bookmark[0]);
      }
    }
  };

  const handleClickNumber = (type) => {
    if (mode === "All") {
      if (type === "prev") {
        if (number === 0) {
          alert("첫번째 입니다. 마지막으로 갑니다");
          setNumber(list.length - 1);
        } else {
          setNumber(number - 1);
        }
      } else {
        if (number === list.length - 1) {
          alert("마지막입니다. 첫번째로 갑니다");
          setNumber(0);
        } else {
          setNumber(number + 1);
        }
      }
    } else {
      if (type === "prev") {
        if (bookNumber === 0) {
          alert("첫번째 입니다. 마지막으로 갑니다");
          setBookNumber(bookmark.length - 1);
          setNumber(bookmark[bookmark.length - 1]);
        } else {
          setBookNumber(bookNumber - 1);
          setNumber(bookmark[bookNumber - 1]);
        }
      } else {
        if (bookNumber === bookmark.length - 1) {
          alert("마지막입니다. 첫번째로 갑니다");
          setBookNumber(0);
          setNumber(bookmark[0]);
        } else {
          setBookNumber(bookNumber + 1);
          setNumber(bookmark[bookNumber + 1]);
        }
      }
    }
  };

  const handleClickAddBookmark = () => {
    //setBookmark((prev) => [...prev, number]);
    let newArray = [...bookmark];
    newArray.push(number);
    newArray = newArray.sort();
    setBookmark(newArray);
  };
  const handleClickRemoveBookmark = () => {
    setBookmark(bookmark.filter((item) => item !== number));
  };

  useEffect(() => {
    setIsBookmark(bookmark.includes(number));
  }, [number, bookmark]);

  return (
    <>
      <Styles.ButtonContainer>
        <Button
          onClick={() => {
            HandleClickMode("All");
          }}
        >
          전체보기
        </Button>
        <Button
          onClick={() => {
            HandleClickMode("Bookmark");
          }}
        >
          북마크보기
        </Button>
      </Styles.ButtonContainer>
      <Styles.Container>
        <div>
          <h2>{mode === "All" ? "전체" : "북마크"} 보기</h2>
          {isBookmark ? (
            <BookmarkTrue onClick={handleClickRemoveBookmark} />
          ) : (
            <BookmarkFalse onClick={handleClickAddBookmark} />
          )}
        </div>
        <div>
          <Button onClick={() => handleClickNumber("prev")}>◀</Button>
          <Styles.TextBox>
            <Styles.Keyword>
              {list[number].number}. {list[number].keyword}
            </Styles.Keyword>
            <Styles.Content>{list[number].description}</Styles.Content>
          </Styles.TextBox>
          <Button onClick={() => handleClickNumber("next")}>▶</Button>
        </div>
      </Styles.Container>
    </>
  );
};

export default List;
