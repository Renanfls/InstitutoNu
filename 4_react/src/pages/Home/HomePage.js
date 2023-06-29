"use client";
import { Card } from "@/components/Card/Card";
import { Col, Container, Row } from "react-bootstrap";

export const HomePage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Card
              title="Card title"
              image="https://images.pexels.com/photos/2928867/pexels-photo-2928867.jpeg?auto=compress&cs=tinysrgb&w=1600"
              total={0}
            />
          </Col>
          <Col xs={12} md={4}>
            <Card
              title="Card title"
              image="https://images.pexels.com/photos/2928867/pexels-photo-2928867.jpeg?auto=compress&cs=tinysrgb&w=1600"
              total={0}
            />
          </Col>
          <Col xs={12} md={4}>
            <Card
              title="Card title"
              image="https://images.pexels.com/photos/2928867/pexels-photo-2928867.jpeg?auto=compress&cs=tinysrgb&w=1600"
              total={0}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
