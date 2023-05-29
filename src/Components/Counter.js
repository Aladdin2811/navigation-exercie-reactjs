import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap'

const Counter = () => {
    const [add,setAdd] = useState(0)
    
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <Container className="my-4">
      <InputGroup className="mb-3">
        <FormControl
          onChange={(event) => setAdd(event.target.value)}
          placeholder="Add value"
          aria-label="Add value"
          aria-describedby="basic-addon2"
        />
        <Button variant="info" onClick={()=> dispatch(incrementByAmount(add))}>Add</Button>
      </InputGroup>

      <Button variant="info" onClick={() => dispatch(increment())}>Increment</Button>
      <h1>{count}</h1>
      <Button variant="info" onClick={() => dispatch(decrement())}>Decrement</Button>

      <Button variant="warning" onClick={() => dispatch(reset())}>Reset</Button>
    </Container>
  )
}

export default Counter