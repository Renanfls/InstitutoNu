"use client";
import { Notification } from "@/components/Notification/Notification";
import { CardContainer } from "@/containers/Card/CardContainer";
import { ModalCreateFolder } from "@/containers/ModalCreateFolder/ModalCreateFolder";
import { ModalSavePin } from "@/containers/ModalSavePin/ModalSavePin";
import { useAppContext } from "@/store/AppContext";
import { fetchPinsAction } from "@/store/actions";
import { saveFolderSuccessType } from "@/store/types";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const HomePage = () => {
  const { state, dispatch } = useAppContext();
  const [showFeedback, setShowFeedback] = useState(false);

  // Verifica se o pin está salvo na pasta
  const pinsNormalized = state.pins.map((pin) => ({
    ...pin,
    total: state.folders.filter((folder) => folder.pins.includes(pin.id))
      .length,
  }));

  // Exibe os pins na pagina
  useEffect(() => {
    fetchPinsAction(dispatch);
  }, []);

  // Exibe a notificação sempre que uma pasta for criada
  useEffect(() => {
    if (state.type === saveFolderSuccessType) {
      setShowFeedback(true);
    }
  }, [state.type]);

  return (
    <>
      {/* Se for True, abre o modal */}
      <ModalSavePin open={state.mode === "savePin"} />
      <ModalCreateFolder open={state.mode === "createFolder"} />
      {showFeedback && (
        <Notification
          message="Criado com sucesso"
          onClose={() => setShowFeedback(false)}
        />
      )}
      <Container>
        <Row>
          {pinsNormalized.map((pin) => (
            <Col key={pin.id} xs={12} md={4}>
              <CardContainer {...pin} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
