"use client";
import { Button, Badge } from "react-bootstrap";
import CardBS from "react-bootstrap/Card";

export const Card = ({ image, total, title, onClick }) => (
  <CardBS>
    <CardBS.Img src={image} alt="Card image" />
    <CardBS.ImgOverlay>
      <Button variant="primary" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
        <Badge bg="none">{total}</Badge>
      </Button>
    </CardBS.ImgOverlay>
    <CardBS.Body>
      <CardBS.Title>{title}</CardBS.Title>
    </CardBS.Body>
  </CardBS>
);
