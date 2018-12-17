import Immutable from 'seamless-immutable';

const initialState = Immutable({
  modelType: null,
  predict: null
});

const reducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}

export default reducer;
