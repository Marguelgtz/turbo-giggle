# turbo-giggle

> Github made the name not me

Im bored but I have wine, a sandwich and my computer. Lets see what I can build 👀

---

## Initial Ideas

- Something threejs with react-three-fiber
  - Maybe a crappy (hopefully not) game ?
    - maybe something scary ish [dark emviroment w/ flashlight]
    - find your way out ???
  - Live Audio Viz?
- apply hook driven development idea with it
  - Separate funtionality into hooks
- Component based
- Clean code / commits / branching
- Good Music
- Some redux too why not

---

## Hooks
- `useMousePos()` returns mouse position coordinates **{mouseX | MouseY}**
```js
const { mouseX, mouseY } = useMousePos();
```
- `useWindow()` returns window **{windowX | windowY}**
```js
const { windowX, windowY } = useWindowSize();
```
- `useKeyPress()` recieves desired key press and callback function for when the key is pressed **(keyPressed, callBack)**
```js
useKeyPress("w", () => {
    console.log("move front fire");
    dispatch(moveFront());
    });
```

## Hook Ideas

> not sure if this makes sense

- Follow obj hook
- User Control Hook
- User Actions Hooks
  - Shoot (`useShoot`)
  - Loot (`useLoot`)
  - Interact (`useInteract`)

---

## Todo

- [x] character obj
  - [x] Cube
  - [ ] Model
- [ ] Control Camera with mouse (Kind of working??)
- [ ] Camera Follow Character (3rd personish)
- [x] Character Movement with keys 
  - `W` => Foward
  - `S` => Backward
  - `A` => Left
  - `D` => Right

> idk what else for now
