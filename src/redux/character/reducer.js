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
    case "move-front":
      console.log("foward case");
      return {
        ...state,
        charPos: { ...state.charPos, x: state.charPos + 1 },
      };
    case "move-back":
      console.log("back case");
      return {
        ...state,
        charPos: { ...state.charPos, x: state.charPos - 1 },
      };
    case "move-left":
      console.log("left case");
      return {
        ...state,
        charPos: { ...state.charPos, z: state.charPos - 1 },
      };
    case "move-right":
      console.log("right case");
      return {
        ...state,
        charPos: { ...state.charPos, z: state.charPos + 1 },
      };
    default:
      return state;
  }
};

export default charReducer;
