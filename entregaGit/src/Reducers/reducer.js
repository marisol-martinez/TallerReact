import initialState from "../Store/initialState";

let reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "LISTADO_ENTRENAMIENTO":
      return { ...state, listaDeEntrenamientos: action.payload };
      case "LISTADO_TIPOS":
      return { ...state, tiposEntrenamientos: action.payload };
    default:
      return state;
  }
};

export default reducer;
