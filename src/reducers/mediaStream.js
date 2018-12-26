import actions from '../actions';

const initialState = {
  stream: null,
  error: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_MEDIA_STREAM.SUCCESS:
      return {
        ...state,
        stream: action.payload
      }

    case actions.GET_MEDIA_STREAM.FAILURE:
      return {
        ...state,
        error: action.error
      }

    default:
      return state;
  }
}

export default reducer;
