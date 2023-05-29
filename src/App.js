import "./App.css";
import {  Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/Header/NavigationBar";
import Home from "./Components/Home";
// import Features from "./Components/Features";
// import Pricing from "./Components/Pricing";
import Category from "./Components/Category";
import Products from "./Components/Products";
import Counter from "./Components/Counter";
import Users from "./Components/Users";

function App() {
  return (
    <>
      <NavigationBar />
    
        <Routes>
          <Route path="/" element={<Home title={"Home Here !"}/>} />
          <Route path="/Category" element={<Category title={"Category Here !"}/> } />
          <Route path="/Products" element={<Products title={"Products Here !"}/> }/>
          <Route path="/count" element={<Counter /> }/>
          <Route path="/users" element={<Users /> }/>
        </Routes>
    </>
  );
}

export default App;
