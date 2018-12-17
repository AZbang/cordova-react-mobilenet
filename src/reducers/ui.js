import Immutable from 'seamless-immutable';

const initialState = Immutable({
  loading: false
});

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'LOADING_START':
      return state.merge({loading: true})
    case 'LOADING_END':
      return state.merge({loading: false})
    default:
      return state
  }
}

export default reducer;
