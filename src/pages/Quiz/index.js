import Styles from "./styles";
import data from "../../data/data";
import { useEffect, useState } from "react";
import { Button } from "../../components/Buttons/Button";
import Modal from "../../components/Modals/Modal";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import ListState from "../../States/ListState";

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function pickRandom(array) {
  return randomNumber(0, array.length - 1);
}
function remove(array, toPick) {
  array.splice(toPick, 1);
}

//데이터 map 등 이용하는걸로 바꾸기
// data.forEach((i) => {
//   console.log(i);
//   quizList.push(i.number);
// });
const quizList = [];
const Quiz = () => {
  const [pickNumber, setPickNumber] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState({ success: [], failure: [] });
  const [modalOpen, setModalOpen] = useState(false);
  const [unitResult, setUnitResult] = useState("X");
  const [answer, setAnswer] = useState("");
  const [isQuiz, setIsQuiz] = useState(true);
  const [times, setTimes] = useState(1);

  const list = useRecoilValue(ListState);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (modalOpen) {
        closeModal();
      } else {
        handleClick();
      }
    }
  };

  const closeModal = () => {
    //console.log(quizList);
    setModalOpen(false);
    setInput("");
    if (quizList.length > 0) {
      pick();
    } else {
      setIsQuiz(false);
    }
    inputRef.current.focus();
    //console.log(isQuiz);
  };

  const handleClick = () => {
    setModalOpen(true);
    if (input === list[pickNumber].keyword) {
      //console.log("정답입니다.");
      setUnitResult("O");
      setResult((prev) => ({ ...prev, ...prev.success.push(pickNumber) }));
      setAnswer("");
    } else {
      //console.log("오답입니다.");
      setUnitResult("X");
      setResult((prev) => ({ ...prev, ...prev.failure.push(pickNumber) }));
      setAnswer("정답: " + list[pickNumber].keyword);
    }
    inputRef.current.focus();
  };

  const handleClickRe = () => {
    setTimes(times + 1);
    setResult({ success: [], failure: [] });
    result.failure.forEach((i) => {
      quizList.push(i);
    });
    setIsQuiz(true);
    pick();
  };

  function pick() {
    const pickNum = pickRandom(quizList);
    setPickNumber(quizList[pickNum]);
    remove(quizList, pickNum);
    console.log(pickNum);
    console.log(quizList);
    if (quizList.length < 1) {
    }
  }

  useEffect(() => {
    for (let i = 0; i < list.length; i++) {
      quizList.push(i);
    }
    inputRef.current.focus();
    pick();
  }, []);

  useEffect(() => {
    if (isQuiz) {
      inputRef.current.focus();
    }
  }, [isQuiz]);

  return (
    <Styles.Container>
      <h2>{times}회차</h2>
      <div>
        {isQuiz ? (
          <>
            <Styles.Description>
              {list[pickNumber].number}. {list[pickNumber].description}
            </Styles.Description>
            <Styles.WriteAnswer>
              <input
                type="text"
                value={input}
                name="keyword"
                height="medium"
                onChange={handleInputChange}
                onKeyDown={onKeyDown}
                ref={inputRef}
                autoComplete="off"
              />
              <Button onClick={handleClick}>확인</Button>
            </Styles.WriteAnswer>
            <Modal open={modalOpen} close={closeModal} closeEnter={true}>
              <Styles.Answer>
                <Styles.AnswerOX color={unitResult === "X" ? "red" : "blue"}>
                  {unitResult}
                </Styles.AnswerOX>
                {answer}
              </Styles.Answer>
            </Modal>
          </>
        ) : (
          <>
            {result.failure.length > 0 ? (
              <>
                틀린 문제 {result.failure.length}개
                <ul>
                  {list.map((item, index) => {
                    if (result.failure.includes(index)) {
                      return (
                        <li key={item.number}>
                          {item.number}. {item.keyword} : {item.description}
                        </li>
                      );
                    } else {
                      return "";
                    }
                  })}
                </ul>
                <Button onClick={handleClickRe}>틀린 문제 다시 풀기</Button>
              </>
            ) : (
              "틀린문제 없음"
            )}
          </>
        )}
      </div>
    </Styles.Container>
  );
};

export default Quiz;
