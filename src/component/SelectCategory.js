import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import CategoryProducts from "./CategoryProducts";

const SelectCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) throw Error("product not get");
        const categories = await response.json();

        setCategories(categories);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="category">
      <Row>
        {categories.map((cat) => {
        
          return (
            <Col span={6}>
              <Link to={`/category/${cat}`}>
                <Card
                  style={{
                    width: 300,
                  }}
                >
                  <p><b>{cat}</b></p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SelectCategory;
