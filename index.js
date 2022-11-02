const BUY_CAKE = "BUY_CAKE";

//action + action creator
function buyCake() {
  // returning an action
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
