"use client";
import { Notification } from "@/components/Notification/Notification";
import { CardContainer } from "@/containers/Card/CardContainer";
import { ModalCreateFolder } from "@/containers/ModalCreateFolder/ModalCreateFolder";
import { ModalSavePin } from "@/containers/ModalSavePin/ModalSavePin";
import { useAppContext } from "@/store/AppContext";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const HomePage = () => {
  const { state, dispatch } = useAppContext();
  return (
    <>
      <ModalSavePin open={state.mode === "savePin"} />
      <ModalCreateFolder open={false} />
      <Notification
        message="Criado com sucesso"
        onClose={() => {
          console.log("Clicou em fechar");
        }}
      />
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <CardContainer
              title="Card title"
              image="https://picsum.photos/200/135?53"
              total={0}
            />
          </Col>
          <Col xs={12} md={4}>
            <CardContainer
              title="Card title"
              image="https://images.pexels.com/photos/2928867/pexels-photo-2928867.jpeg?auto=compress&cs=tinysrgb&w=1600"
              total={0}
            />
          </Col>
          <Col xs={12} md={4}>
            <CardContainer
              title="Card title"
              image="https://images.pexels.com/photos/2928867/pexels-photo-2928867.jpeg?auto=compress&cs=tinysrgb&w=1600"
              total={0}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
