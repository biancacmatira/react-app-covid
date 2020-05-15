const initState = {
  country: "",
  data: {},
};

const MainReducer = (state = initState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "GET_COUNTRY":
      return state;
    default:
      return state;
      break;
  }
};

export default MainReducer;
