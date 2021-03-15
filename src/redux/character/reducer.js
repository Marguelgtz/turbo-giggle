const initialState = {
  movementControl: {
    w: false,
    a: false,
    s: false,
    d: false,
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
    case "movement":
      // console.log("foward case");
      return {
        ...state,
        movementControl: action.payload,
      };

    default:
      return state;
  }
};

export default charReducer;
