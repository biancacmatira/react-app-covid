const initState = {
  country: "",
  data: {},
};

const MainReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_DATA":
      return state;
    case "GET_DAILY":
      return state;
    case "GET_COUNTRIES":
      return state;
    default:
      return state;
  }
};

export default MainReducer;
