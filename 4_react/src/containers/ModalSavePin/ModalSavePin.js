import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { useAppContext } from "@/store/AppContext";
import { closeModalSavePinAction } from "@/store/actions";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

export const ModalSavePin = ({ open }) => {
  const { dispatch } = useAppContext();
  const handleClose = () => {
    dispatch(closeModalSavePinAction());
  };
  return (
    <Modal
      title="Salvar pin"
      open={open}
      close={handleClose}
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
};
