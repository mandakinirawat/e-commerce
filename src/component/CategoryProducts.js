import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "antd";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const CategoryProducts = () => {
  const { name } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${name}`
        );
        if (!response.ok) throw Error("Did not received an expected data");
        const cards = await response.json();
        console.log(cards);
        setCards(cards);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    fetchCards();
  }, []);

  return (
    <div>
      <Row>
        {cards.map((card) => {
          const { id } = card;
          return (
            <Col span={6}>
              <Link to={`/products/${id}`}>
                <Card
                  hoverable
                  style={{
                    width: 200,
                  }}
                  cover={<img alt="example" src={card.image} />}
                >
                  <Meta title={card.title} />
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CategoryProducts;
