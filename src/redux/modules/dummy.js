import { handleActions, createAction } from 'redux-actions'
import { takeEvery, all } from 'redux-saga/effects'

export const DUMMY_ACTION = 'movie-frontend/dummy/DUMMY_ACTION'

export const getInitialState = () => {
  return {
    dummy: null,
  }
}

const reducer = handleActions(
  {
    [DUMMY_ACTION]: (state, action) => {
      const { dummy } = action.payload
      return { ...state, dummy: dummy }
    }
  },

  getInitialState()
)

export function* createDummySaga(action) {

}

export function* dummySaga() {
  yield all([takeEvery(DUMMY_ACTION, createDummySaga)])
}

export default reducer
