import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=12"
        );
        if (!response.ok) throw Error("Did not received an expected data");
        const cards = await response.json();
        setCards(cards);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    fetchCards();
  }, []);
  
  if (cards.length === 0) return <div>Loading...</div>;
  return (
    <main className="cards">
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
                    border
                  }}
                  cover={<img alt="example" src={card.image} />}
                >
                  <Meta title={card.title}/>
                  <p>${card.price}</p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>

    </main>
  );
};

export default Cards;
