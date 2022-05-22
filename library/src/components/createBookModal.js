import { Modal, Button, InputGroup, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import booksStore from '../stores/booksStore';

export default function CreateBookModal(props) {
  const [book, setBook] = useState({
    author: '',
    title: '',
    genres: ['Fantasy'],
  });
  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    booksStore.createBook(book);
    props.closeModal();
  };
  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create a book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Author</InputGroup.Text>
            <Form.Control type="text" name="author" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Title</InputGroup.Text>
            <Form.Control type="text" name="title" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Genres</InputGroup.Text>
            <Form.Control
              type="checkbox"
              name="genres"
              onChange={handleChange}
            />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
