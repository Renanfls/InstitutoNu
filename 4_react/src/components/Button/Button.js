import ButtonBS from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export const Button = ({
  loading,
  label,
  loadingLabel,
  ...buttonProps // variant, disabled, onClick
}) => (
  <ButtonBS {...buttonProps}>
    {loading && (
      <>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>{" "}
        {/* Coloca um espaço do lado */}
      </>
    )}
    {loading ? loadingLabel : label}
  </ButtonBS>
);
