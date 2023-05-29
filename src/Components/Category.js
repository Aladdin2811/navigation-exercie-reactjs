import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Category = (props) => {
  const uniqueCategories = [
    ...new Set(props.productData.map((product) => product.category)),
  ];

  const handleCategorySelect = (eventKey) => {

    props.handleSelectedCategory(uniqueCategories[eventKey])

    // console.log(uniqueCategories[eventKey]);
  };

  return (
    <DropdownButton title={"choose"} onSelect={handleCategorySelect}>
      <Dropdown.Item>All</Dropdown.Item>
      {uniqueCategories.map((category, index) => (
        <Dropdown.Item key={index} eventKey={index}>
          {category}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default Category;
