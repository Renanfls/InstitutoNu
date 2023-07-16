import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { useAppContext } from "@/store/AppContext";
import {
  closeModalsAction,
  fetchFoldersAction,
  openModalCreateFolderAction,
  savePinInFolderAction,
} from "@/store/actions";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const [itensLoading, setItensLoading] = useState({});
  const handleClose = () => {
    dispatch(closeModalsAction());
  };

  const handleClickCreateFolder = () => {
    console.log("Clicou em criar pasta");
    dispatch(openModalCreateFolderAction());
  };

  const handleClick = async (folderId) => {
    setItensLoading((prevState) => {
      return {
        ...prevState,
        [folderId]: true,
      }
    })

    await savePinInFolderAction(dispatch, state.activePinId, folderId);

    setItensLoading((prevState) => {
      return {
        ...prevState,
        [folderId]: false,
      }
    })
  };

  const foldersNormalized = state.folders.map((folder) => {
    return {
      ...folder,
      saved: folder.pins.includes(state.activePinId), // Verifica se o pin está na pasta
    };
  });

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
          onClick: handleClickCreateFolder,
        },
      ]}
    >
      <ListGroup variant="flush">
        {foldersNormalized.map((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className="text-end">
                <Button
                  label={folder.saved ? "Salvo" : "Salvar"}
                  loadingLabel="Salvando"
                  onClick={() => handleClick(folder.id)}
                  variant={folder.saved ? "secondary" : "primary"}
                  disabled={folder.saved}
                  loading={itensLoading[folder.id]}
                />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Modal>
  );
};
