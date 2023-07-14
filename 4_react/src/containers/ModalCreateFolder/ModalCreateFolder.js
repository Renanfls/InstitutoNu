import { Modal } from "@/components/Modal/Modal";
import { useAppContext } from "@/store/AppContext";
import { closeModalsAction, saveFolderAction } from "@/store/actions";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { saveFolderInitType, saveFolderSuccessType } from "@/store/types";

export const ModalCreateFolder = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const [folderName, setFolderName] = useState("");

  const handleClose = () => {
    dispatch(closeModalsAction());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Fez o submit:", folderName);
    saveFolderAction(dispatch, folderName);
  };

  const handleChange = (e) => {
    setFolderName(e.target.value);
  };

  useEffect(() => {
    if (state.type === saveFolderSuccessType) {
      handleClose();
    }
  }, [state.type]);

  return (
    <Modal
      title="Criar pasta"
      open={open}
      close={handleClose}
      controls={[
        {
          label: "Criar e salvar",
          loadingLabel: "Criando",
          variant: "primary",
          loading: state.type === saveFolderInitType,
          type: "submit",
          form: "form-criar-pasta", // prop que o button aceita
        },
      ]}
    >
      <Form onSubmit={handleSubmit} id="form-criar-pasta">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome da pasta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o nome da pasta"
            value={folderName}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </Modal>
  );
};
