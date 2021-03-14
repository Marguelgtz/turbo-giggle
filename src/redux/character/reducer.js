import {} from "./actions";

const initialState = {
  charPos: [0, 0, 0],
  charRotation: [0, 0, 0],
  //maybe boleans for actions such as shoting/ interacting... t hings like that
};

const charReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default charReducer;
