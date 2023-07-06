// Função modificadora/redutora do reducer

import * as types from "./types";

export function reducer(state, action) {
  switch (action.type) {
    case types.openModalSavePinType:
      return {
        ...state,
        mode: "savePin",
      };
    case types.closeModalSavePinType:
      return {
      ...state,
        mode: null,
      };
    default:
      return state;
  }
}
