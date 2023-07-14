import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { useAppContext } from "@/store/AppContext";
import {
  closeModalsAction,
  fetchFoldersAction,
  openModalCreateFolderAction,
} from "@/store/actions";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const handleClose = () => {
    dispatch(closeModalsAction());
  };

  const handleClickCreateFolder = () => {
    console.log("Clicou em criar pasta");
    dispatch(openModalCreateFolderAction());
  };

  useEffect(() => {
    fetchFoldersAction(dispatch); // Pega o dispatch capturado do Context
  }, []);

  return (
    <Modal
      title="Salvar pin"
      open={open}
      close={handleClose}
      controls={[
        {
          label: "Criar pasta",
          variant: "primary",
          onClick: handleClickCreateFolder
        },
      ]}
    >
      <ListGroup variant="flush">
        {state.folders.map((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className="text-end">
                <Button label="Salvar" loadingLabel="Salvando" />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Modal>
  );
};
