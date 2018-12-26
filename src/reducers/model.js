import Immutable from 'seamless-immutable';
import actions from '../actions';

const initialState = Immutable({
  computingType: 'webgl',
  exist: false,
  loading: false,
  predict: null,
  error: null,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_MODEL.REQUEST:
      return state.merge({ loading: true })
    case actions.LOAD_MODEL.SUCCESS:
      return state.merge({ loading: false, exist: true})
    case actions.LOAD_MODEL.FAILURE:
      return state.merge({ loading: false, error: action.error })

    case actions.PREDICT_MODEL.REQUEST:
      return state.merge({ loading: true })
    case actions.PREDICT_MODEL.SUCCESS:
      return state.merge({ loading: false, predict: action.payload})
    case actions.PREDICT_MODEL.FAILURE:
      return state.merge({ loading: false, error: action.error })

    default:
      return state;
  }
}

export default reducer;
