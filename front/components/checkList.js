import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'antd';
import { CheckSquareOutlined, BorderOutlined } from '@ant-design/icons';
import { modalCheckList, ChargingGraph } from '../css/single';
import useInput from '../exp/useInput';

const CheckList = () => {
  const [titleTodo, onChangeTodoTitle, setTitle] = useInput('');
  const [changeTitle, setChangeTitle] = useState(false);
  const [percentage, setPercentage] = useState(50);
  const [todoList, setTodoList] = useState([{ complete: false, title: 'test1' }, { complete: true, title: 'test2' }, { complete: false, title: 'test3' }]);
  const [addToDo, setAddToDo] = useState(false);
  const [toDo, onChangeTodo, setTodo] = useInput('');

  const ClickTitleToChange = useCallback(() => {
    if (changeTitle) {
      setTitle('');
    }
    setChangeTitle((prevState) => !prevState);
  }, [titleTodo]);

  const addToDoList = useCallback(() => {
    setAddToDo((prev) => !prev);
  }, [addToDo]);

  const addCheckList = useCallback(() => {
    setTodoList((prev) => prev);
    setTodo('');
    setAddToDo((prev) => !prev);
  }, [toDo]);

  const completeTodo = useCallback((index) => {
    setTodoList((prev) => {
      prev[index].complete = true;
      return prev;
    });
  }, [todoList]);// todo 지금 더미데이터라서 바로바로 동기화 안됨 useSelector쓰면 바뀜

  useEffect(() => {
    const all = todoList.length;
    const complete = todoList.filter((x) => x.complete === true).length;
    setPercentage(
      Math.floor((complete / all) * 100),
    );
  }, [todoList]);

  return (
    <div css={modalCheckList}>
      <div>
        {changeTitle
          ? (
            <input
              autoFocus={changeTitle}
              onBlur={ClickTitleToChange}
              value={titleTodo}
              onChange={onChangeTodoTitle}
            />
          )
          : <h2 onClick={ClickTitleToChange} className="todo-title">TodoList</h2> }
      </div>
      <div className="modal-checkList">
        <span className="percent-now">{percentage}%</span>
        <div className="origin-graph">
          <ChargingGraph width={`${percentage}%`} />
        </div>
        <br />
        <ul>
          {todoList.map((ele, ind) => (
            <li className="todo-list" key={ind}>
              {ele.complete
                ? (
                  <>
                    <CheckSquareOutlined />
                    <h5 className="complete-underline">{ele.title}</h5>
                  </>
                )
                : (
                  <>
                    <BorderOutlined onClick={() => completeTodo(ind)} />
                    <h5>{ele.title}</h5>
                  </>
                )}
            </li>
          ))}
        </ul>
        {addToDo ? (
          <Form className="add-todo-List" onFinish={addCheckList}>
            <input onBlur={addToDoList} value={toDo} onChange={onChangeTodo} autoFocus={addToDo} />
            <button className="add-todo" type="submit">Add</button>
          </Form>
        ) : <button className="add-todo" onClick={addToDoList} type="button">Add to do</button>}
      </div>
    </div>
  );
};

export default CheckList;
