import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import style from './Display.module.css';

const DisplayTodo = ({isOpen, 
                      formData, 
                      handleCloseButton,
                      handleEditTodo,
                      handleRemoveTodo}) => {
  return (
    <Dialog open={isOpen} onClose={handleCloseButton}>
      <MuiDialogTitle className={style.displayTodoTitle}>Your Todo</MuiDialogTitle>
      <MuiDialogContent>
       <div>
         <h2>{formData.todoName}</h2>
         <div>{formData.todoNote}</div>
       </div>
      </MuiDialogContent>

      <MuiDialogActions>
        <div className={style.displayButtonsWrapper}>
          <Button color="secondary" variant="outlined" onClick={handleRemoveTodo}>Remove</Button>

          <div>
            <Button color="primary" onClick={handleCloseButton}>Close</Button>
            <Button color="primary" onClick={handleEditTodo}>Edit</Button>
          </div>
        </div>
      </MuiDialogActions>
    </Dialog>
  );
}

export default DisplayTodo;
