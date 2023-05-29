import React, { useEffect, useState } from "react";
import CardItem from "./CardItem/CardItem";
import { ProductsApi } from "../API/ProductsApi";
import { Col, Container, Row } from "react-bootstrap";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/ProductsSlice";
import axios from "axios";

const ProductData = ProductsApi;

const Products = (props) => {
  const dispatch = useDispatch();
  // ctreat state for the selected categures in filter
  const [selectedCategory, setSelectedCategory] = useState("");
  const productState = useSelector((state) => state.products);

  const handleSelectedCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        dispatch(fetchProducts(response.data.products))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <>
      <button onClick={() => dispatch(fetchProducts(ProductData))}>
        Add ProductData
      </button>
      <Category
        handleSelectedCategory={handleSelectedCategory}
        productData={productState}
      />
      <Container>
        <Row>
          {productState
            .filter(
              (product) =>
                !selectedCategory || product.category === selectedCategory
            )
            .map((product,key) => (
              <Col sm={3} key={key}>
                <CardItem
                  thumbnail={product.thumbnail}
                  title={product.title}
                  description={product.description}
                  brand={product.brand}
                  category={product.category}
                  price={product.price}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
