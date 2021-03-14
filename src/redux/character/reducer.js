import {} from "./actions";

const initialState = {
  charPos: {
    x: 0,
    y: 0,
    z: 0,
  },
  charRotation: {
    x: 0,
    y: 0,
    z: 0,
  },
  //maybe boleans for actions such as shoting/ interacting... t hings like that
};

const charReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "move-foward":
      return {
        ...state,
        charPos: { ...state.charPos, x: state.charPos + 0.5 },
      };
    default:
      return state;
  }
};

export default charReducer;
