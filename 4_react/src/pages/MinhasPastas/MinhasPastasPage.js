import { ListGroup } from "@/components/ListGroup/ListGroup";
import Container from "react-bootstrap/Container";

export const MinhasPastasPage = () => (
  <Container>
    <ListGroup items={[
      {
        title: "React",
        total: 3
      },
      {
        title: "Html",
        total: 5
      },
      {
        title: "Css",
      }
    ]} />
  </Container>
);
