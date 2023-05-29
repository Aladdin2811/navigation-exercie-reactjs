import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../Redux/counterSlice";

const Home = (props) => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{count} Numbers</h1>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>

    </div>
  );
};

export default Home;
