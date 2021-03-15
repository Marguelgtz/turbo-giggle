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
        charPos: { ...state.charPos, z: state.charPos.z - 1 },
      };
    case "move-back":
      console.log("back case");
      return {
        ...state,
        charPos: { ...state.charPos, z: state.charPos.z + 1 },
      };
    case "move-left":
      console.log("left case");
      return {
        ...state,
        charPos: { ...state.charPos, x: state.charPos.x - 1 },
      };
    case "move-right":
      console.log("right case");
      return {
        ...state,
        charPos: { ...state.charPos, x: state.charPos.x + 1 },
      };
    case "move-front-right":
      console.log("front/right case");
      return {
        ...state,
        charPos: {
          ...state.charPos,
          x: state.charPos.x + 1,
          z: state.charPos.z - 1,
        },
      };
    case "move-front-left":
      console.log("front/left case");
      return {
        ...state,
        charPos: {
          ...state.charPos,
          x: state.charPos.x - 1,
          z: state.charPos.z - 1,
        },
      };
    case "move-back-left":
      console.log("back/left case");
      return {
        ...state,
        charPos: {
          ...state.charPos,
          x: state.charPos.x - 1,
          z: state.charPos.z + 1,
        },
      };
    case "move-back-right":
      console.log("right case");
      return {
        ...state,
        charPos: { ...state.charPos, x: state.charPos.x + 1 },
      };
    default:
      return state;
  }
};

export default charReducer;
