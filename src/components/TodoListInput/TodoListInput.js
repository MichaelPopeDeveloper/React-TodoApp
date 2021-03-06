import React from 'react';

// Bootstrap 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const TodoListInput = ({ onChange, onClick, value }) => {

    return(
        <Form className='input-group w-75'>
            <Form.Control placeholder='Todo Item' onChange={onChange} value={value} />
            <Button onClick={onClick}>Create Item</Button>
        </Form>
    )
};

export default TodoListInput;
