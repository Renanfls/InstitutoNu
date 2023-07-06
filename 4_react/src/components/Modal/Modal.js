import ModalBS from "react-bootstrap/Modal";
import { Button } from "../Button/Button";

export const Modal = ({ title, children, open, controls = [], close }) => (
  <ModalBS show={open} onHide={close}>
    <ModalBS.Header closeButton>
      <ModalBS.Title>{title}</ModalBS.Title>
    </ModalBS.Header>
    <ModalBS.Body>{children}</ModalBS.Body>
    <ModalBS.Footer>
      {controls.map((control, controlIndex) => (
        <Button
          key={controlIndex}
          {...control} // loading, label, loadingLabel, variant, disabled, onClick
        />
      ))}
    </ModalBS.Footer>
  </ModalBS>
);
