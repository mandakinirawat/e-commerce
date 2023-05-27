import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import { Col, Row,Button } from "antd";
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
  if (product.length === 0) return <div>Loading...</div>;
  return (
    <div style={{marginTop:"30px"}}>
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
            <p><b>${product.price}</b></p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
          
          title={product?.title}
          
            bordered={true}
            style={{
              width: 300,
            }} >
              
            <p>{product.description}</p>
          </Card>
          <Button type="primary">Add to Cart</Button>
          <span><Rating/></span>
          
        </Col>
      </Row>
    </div>
  );
};

export default Product;
