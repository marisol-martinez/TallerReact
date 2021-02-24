import initialState from "../Store/initialState";

let reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "LOGUEAR":
      return { ...state, logged: true };
    default:
      return state;
  }
};

export default reducer;
