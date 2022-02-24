import React from 'react';
import moment from 'moment';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import style from './TodoHeader.module.css';
import DialogModal from '../Dialog/Dialog';
import DisplayTodo from '../DisplayTodo/DisplayTodo';

const TodoHeader = ({handleOpenDialog, 
                      isOpen,
                      handleFormData,
                      formData,
                      handleSetTodoOnSubmit,
                      isOpenDisplay,
                      handleRemoveTodo,
                      handleEditTodo,
                      handleCloseButton,
                      totalCount}) => {
  const weekDay = moment().format('dddd');
  const date = moment().date();

  return (
    <div className={style.todoHeader}>
      <div className={style.wrapper}>
        <div className={style.todosCount}>
          <span className={style.finished}>{totalCount.finished}</span>

          <div className={style.total}>
            <span>Tasks</span>
            <span>{`/ ${totalCount.total}`}</span>
          </div>

        </div>

        <div>
          <span className={style.weekDay}>{weekDay} </span>
          <span className={style.date}>{date}</span>
        </div>
      </div>

      <div className={style.addTodo} onClick={handleOpenDialog}>
        <AddCircleIcon color="primary"/>
        <span className={style.iconBackground}></span>
      </div>

      <DialogModal isOpen={isOpen} 
                   handleOpenDialog={handleOpenDialog} 
                   handleFormData={handleFormData}
                   formData={formData}
                   handleSetTodoOnSubmit={handleSetTodoOnSubmit}/>

      <DisplayTodo formData={formData}
                   isOpen={isOpenDisplay}
                   handleCloseButton={handleCloseButton}
                   handleEditTodo={handleEditTodo}
                   handleRemoveTodo={handleRemoveTodo}/>
    </div>
  );
}

export default TodoHeader;
