import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"

function Cadastro() {
  const [name, setName] = useState("");

  const onSubmitHandler = (e) =>{
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name })
    }
    

    fetch('http://localhost:3000/artist', requestOptions)
          .then(response => response.json())
    
  }

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Nome</Form.Label>
      <Form.Control type="text" placeholder="Digite o nome do artista" onChange={handleChange}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default Cadastro