import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import { Col, Row, Button } from "antd";
import Rating from "./Rating";

const { Meta } = Card;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw Error("product not get");
        const product = await response.json();
        console.log(product);
        setProduct(product);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart)
    const IsProductExist = cart.find((item) => item.id === product.id);
    if (IsProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    alert("Item added to Cart")
  };

  if (product.length === 0) return <div>Loading...</div>;
  return (
    <div style={{ marginTop: "30px" }}>
      <Row>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 200,
            }}
            cover={<img alt="example" src={product?.image} />}
          >
            <Meta title={product?.title} />
            <p>
              <b>${product.price}</b>
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={product?.title}
            bordered={true}
            style={{
              width: 300,
            }}
          >
            <p>{product.description}</p>
          </Card>
          <Button type="primary" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </Button>
          <span>
            <Rating />
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
