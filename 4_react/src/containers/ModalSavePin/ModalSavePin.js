import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

export const ModalSavePin = ({ open }) => (
  <Modal
    title="Salvar pin"
    open={open}
    controls={[
      {
        label: "Criar pasta",
        variant: "primary",
        onClick: () => {
          console.log("Clicou em criar pasta");
        },
      },
    ]}
  >
    <ListGroup variant="flush">
      <ListGroup.Item>
        <Row>
          <Col xs={8}>Minha Pasta</Col>
          <Col xs={4} className="text-end">
            <Button label="Salvar" loadingLabel="Salvando" />
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  </Modal>
);
