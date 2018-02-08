export default (state = 0, action) => {
  switch (action.type) {
    case "LOGIN":
      return state + 1;
    case "SIGNUP":
      return state - 1;
    default:
      return state;
  }
};
