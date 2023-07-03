import { Modal } from "@/components/Modal/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";

export const ModalCreateFolder = ({ open }) => {
  const [folderName, setFolderName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log("Fez o submit:", folderName);
  };

  const handleChange = (e) => {
    setFolderName(e.target.value);
  };

  return (
    <Modal
      title="Criar pasta"
      open={open}
      controls={[
        {
          label: "Criar e salvar",
          loadingLabel: "Criando",
          variant: "primary",
          loading: false,
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
