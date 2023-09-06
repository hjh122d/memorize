import Styles from "./styles";
import { Button } from "../../components/Buttons/Button";
import { useState } from "react";
import { useRecoilState } from "recoil";
import ListState from "../../States/ListState";

const INITIAL_INPUTS = { keyword: "", description: "" };
const Update = () => {
  //const [list, setList] = useState(data);
  const [inputs, setInputs] = useState(INITIAL_INPUTS);
  const [list, setList] = useRecoilState(ListState);

  const handleDelete = (number) => {
    const newData = list.filter((item) => item.number !== number);
    setList(newData);
    console.log(newData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value,
    };
    setInputs(nextInputs);
  };

  const handleInsert = () => {
    const newNumber = list[list.length - 1].number + 1;
    const newData = {
      number: newNumber,
      keyword: inputs.keyword,
      description: inputs.description,
    };
    setList((prev) => [...prev, newData]);
    setInputs(INITIAL_INPUTS);
  };
  return (
    <Styles.Container>
      <div>
        단어 : <input type="text" name="keyword" onChange={handleInputChange} />{" "}
        설명 :{" "}
        <input
          type="text"
          name="description"
          size="80"
          onChange={handleInputChange}
        />
        <Button onClick={handleInsert}>추가</Button>
      </div>
      <Styles.listTb>
        <thead>
          <tr>
            <td>No.</td>
            <td>단어</td>
            <td>설명</td>
            <td>삭제</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item.number}>
                <td>{item.number}</td>
                <td>{item.keyword}</td>
                <td>{item.description}</td>
                <td>
                  <Button
                    onClick={() => {
                      handleDelete(item.number);
                    }}
                  >
                    삭제
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Styles.listTb>
    </Styles.Container>
  );
};

export default Update;
