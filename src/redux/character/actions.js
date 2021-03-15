//Basic Movement

export const moveFront = () => {
  return { type: "move-front" };
};

export const moveBack = () => {
  return { type: "move-back" };
};

export const moveLeft = () => {
  return { type: "move-left" };
};

export const moveRight = () => {
  return { type: "move-right" };
};

//Diagonal movement

export const moveFrontRight = () => {
  return { type: "move-front-right" };
};

export const moveFrontLeft = () => {
  return { type: "move-front-left" };
};

export const moveBackLeft = () => {
  return { type: "move-back-left" };
};
export const moveBackRight = () => {
  return { type: "move-down-right" };
};
