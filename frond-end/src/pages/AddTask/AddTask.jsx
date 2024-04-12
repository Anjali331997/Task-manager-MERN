import { useState } from 'react';
import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

export const AddTask = ({ showModal, handleClose, handleSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: 'low',
        dueDate: ''
      });
    
      const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      return (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Form.Group>
    
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>
    
              <Form.Group controlId="formPriority">
                <Form.Label>Priority</Form.Label>
                <Form.Control
                  as="select"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Form.Control>
              </Form.Group>
    
              <Form.Group controlId="formDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleSubmit(formData)}>
              Save Task
            </Button>
          </Modal.Footer>
        </Modal>
      );
  
}
