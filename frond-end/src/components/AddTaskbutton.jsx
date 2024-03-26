import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import {AddTask} from '../pages/AddTask'

const AddTaskbutton = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  
    const handleSubmit = (formData) => {
      // Save formData to state or perform any other action
      console.log(formData);
      handleClose();
    };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>
      <AddTask
        showModal={showModal}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default AddTaskbutton