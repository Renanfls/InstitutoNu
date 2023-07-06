import { Card } from "@/components/Card/Card";
import { useAppContext } from "@/store/AppContext";
import { openModalSavePinAction } from "@/store/actions";

export const CardContainer = (props) => {
  const { state, dispatch } = useAppContext();
  const handleClick = () => {
    console.log("Clicou");
    dispatch(openModalSavePinAction());
  };
  return <Card {...props} onClick={handleClick} />;
};
