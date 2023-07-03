"use client";
import { Badge, Button } from "react-bootstrap";
import CardBS from "react-bootstrap/Card";

export const Card = ({ image, total, title }) => (
  <CardBS>
    <CardBS.Img src={image} alt="Card image" />
    <CardBS.ImgOverlay>
      <Button variant="primary">
        Salvar
        <Badge bg="secondary">{total}</Badge>
      </Button>
    </CardBS.ImgOverlay>
    <CardBS.Body>
      <CardBS.Title>{title}</CardBS.Title>
    </CardBS.Body>
  </CardBS>
);
