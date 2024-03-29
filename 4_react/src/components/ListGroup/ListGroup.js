import Badge from "react-bootstrap/Badge";
import ListGroupBS from "react-bootstrap/ListGroup";

export const ListGroup = ({ items = [] }) => {
  return (
    <ListGroupBS as="ul">
      {items.map((item, index) => (
        <ListGroupBS.Item
          key={index}
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.title}</div>
          </div>
          <Badge bg="primary" pill>
            {item.total ? item.total : 0}
          </Badge>
        </ListGroupBS.Item>
      ))}
    </ListGroupBS>
  );
};
