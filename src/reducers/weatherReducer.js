// Initial State

const initialState = {
  city: "Tampa",
  temp: 87
}

// Reducer
export const weatherReducer = (state=initialState, action) => {
  console.log("Reducing:", action.type);
  switch(action.type) {
    default:
      return state;
  }

}


export default weatherReducer;