import initialState from "../Store/initialState";

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LISTADO_ENTRENAMIENTO":
      return { ...state, listaDeEntrenamientos: action.payload };
    case "AGREGAR_ENTRENAMIENTO":
      return { ...state, listaDeEntrenamientos: [...state.listaDeEntrenamientos, action.payload] };
    case "ELIMINAR_ENTRENAMIENTO":
      let nuevaLista = state.listaDeEntrenamientos.filter(e => e.id != action.payload );
      return { ...state, listaDeEntrenamientos: nuevaLista};
      case "LISTADO_TIPOS":
      return { ...state, tiposEntrenamientos: action.payload };
    default:
      return state;
  }
};

export default reducer;
