import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import style from './TodoRender.module.css';

const Todo = ({ todo, index, handleMarkTodo, handleOpenTodo }) => {
  const isFinishedTodo = todo.isFinished && style.todoFinished;

  return (
    <div className={style.todoContainer}>
      <span>
        <Checkbox icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
          onClick={(e) => handleMarkTodo(e.target.checked, index)}
          checked={todo.isFinished}
          color="primary" />
      </span>
      <div className={style.todoItem} onClick={() => handleOpenTodo({ ...todo, index })}>
        <span className={isFinishedTodo}>{todo.todoName}</span>
        <ArrowForwardIosIcon fontSize="small" />
      </div>
    </div>
  );
}

const TodoRender = ({todos,  handleMarkTodo, handleOpenTodo}) => {
  return (
    <div className={style.todosRenderWrapper}>
      {todos.map((todo, index) => {
        return <Todo key={todo.id} 
                     todo={todo} 
                     handleMarkTodo={handleMarkTodo} 
                     index={index} 
                     handleOpenTodo={handleOpenTodo}/>
      })}

    </div>
  );
}

export default TodoRender;
