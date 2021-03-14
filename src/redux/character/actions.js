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

export const moveUpRight = () => {
  return { type: "move-up-right" };
};

export const moveUpLeft = () => {
  return { type: "move-up-left" };
};

export const moveDownLeft = () => {
  return { type: "move-down-left" };
};
export const moveDownRight = () => {
  return { type: "move-down-right" };
};
