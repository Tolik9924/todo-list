import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import style from './Dialog.module.css';

const DialogModal = ({isOpen, 
                      handleOpenDialog,
                      handleFormData,
                      formData,
                      handleSetTodoOnSubmit}) => {
  return (
    <Dialog open={isOpen} onClose={handleOpenDialog}>
      <MuiDialogTitle>{formData.isEdit ? 'Edit Todo' : 'Add Todo'}</MuiDialogTitle>

      <MuiDialogContent>
        <form className={style.formStyle}>
          <TextField 
            label="Todo"
            variant="outlined"
            onChange={(e) => { handleFormData('todoName', e.target.value)}}
            value={formData.todoName}
          />

          <TextField
            label="Note"
            variant="outlined"
            onChange={(e) => { handleFormData('todoNote', e.target.value) }}
            value={formData.todoNote}
            multiline
            minRows={4}
          />
        </form>
      </MuiDialogContent>

      <MuiDialogContent>
      <Button color="primary" onClick={handleOpenDialog}>Close</Button>
      <Button disabled={!formData.todoName} 
              type="submit" 
              color="primary" 
              onClick={handleSetTodoOnSubmit}>{formData.isEdit ? 'Edit' : 'Add'}</Button>
      </MuiDialogContent>
    </Dialog>
  );
}

export default DialogModal;
