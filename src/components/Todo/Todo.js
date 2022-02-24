import React, {useState} from 'react';
import TodoActions from '../TodoActions/TodoActions';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoRender from '../TodoRender/TodoRender';
import { v4 as uuidv4 } from 'uuid';

import style from './Todo.module.css';

const initialFormData = {
  isEdit: false,
  todoName: '',
  todoNote: '',
  isFinished: false,
  id: '',
  index: null
}

const Todo = () => {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDisplay, setIsOpenDisplay] = useState(false);
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const resetAll = () => {
    setIsOpen(false);
    setIsOpenDisplay(false);
    setFormData(initialFormData);
  }

  const handleOpenDialog = () => {
    return setIsOpen((prevState) => {
      return !prevState;
    })
  }

  const handleFormData = (fieldName, value) => {
    return setFormData((prevState) => ({
      ...prevState, [fieldName]: value
    }));
  }

  const handleChangeTab = (tabValue) => {
    setTab(tabValue);
  }

  const handleSetTodoOnSubmit = (e) => {
    e.preventDefault();

    if (formData.isEdit) {
      const editedTodos = todos;
      editedTodos.splice(formData.index, 1, { ...formData, isEdit: false, index: null });
      setTodos(editedTodos);
    } else {
      setTodos((prevState) => [...prevState, { ...formData, id: uuidv4() }]);
    }
    resetAll();
  }

  const handleMarkTodo = (isChecked, index) => {
    const updatedTodos = todos.slice();
    updatedTodos.splice(index, 1, { ...todos[index], isFinished: isChecked });
    setTodos(updatedTodos);
  }

  const handleOpenTodo = (todo) => {
    setIsOpenDisplay(true);
    setFormData(todo);
  }

  const handleEditTodo = () => {
    setFormData((prevState) => ({...prevState, isEdit: true}));
    setIsOpenDisplay(false);
    handleOpenDialog();
  }

  const handleRemoveTodo = () => {
    setTodos(todos.filter((item) => item.id !== formData.id));
    resetAll();
  }

  const setFilterTab = (tab, todos) => {
    if(tab === 0) {
      return todos;
    } else if(tab === 1){
      return todos.filter((todo) => !todo.isFinished);
    } else if(tab === 2) {
      return todos.filter((todo) => todo.isFinished);
    }
  }

  const sortedTodos = setFilterTab(tab, todos);

  const getIsFinishedTodosCount = (todos) => todos.reduce((acc, curr) => {
    acc.total = todos.length;
    if(curr.isFinished) {
      acc.finished = acc.finished + 1;
    }

    return acc;
  }, {total: 0, finished: 0});

  const totalCount = getIsFinishedTodosCount(todos);

  return (
    <div className={style.todoWrapper}>
      <TodoHeader handleOpenDialog={handleOpenDialog} 
                  isOpen={isOpen} 
                  handleFormData={handleFormData}
                  formData={formData}
                  handleSetTodoOnSubmit={handleSetTodoOnSubmit}
                  isOpenDisplay={isOpenDisplay}
                  handleEditTodo={handleEditTodo}
                  handleRemoveTodo={handleRemoveTodo}
                  handleCloseButton={resetAll}
                  totalCount={totalCount}/>

      <TodoActions handleChangeTab={handleChangeTab}
                   tab={tab}/>

      <TodoRender todos={sortedTodos} 
                   handleMarkTodo={handleMarkTodo}
                   handleOpenTodo={handleOpenTodo}/>
    </div>
  );
}

export default Todo;
