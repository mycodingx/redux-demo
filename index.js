const BUY_CAKE = "BUY_CAKE";

//action + action creator
function buyCake() {
  // returning an action
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// reducers
// (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
