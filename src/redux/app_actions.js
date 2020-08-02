import { createActions, handleActions, combineActions } from 'redux-actions'

const defaultState = {
  userDetails: { userId: '', name: '', roles: [] }
}
const { onInputChange, updateUser } = createActions({
  ON_INPUT_CHANGE: data => ({ ...data, errorMsg: '' }),
  UPDATE_USER: ({ userId = '', name = '', roles = [] }) => ({
    userDetails: { userId, name, roles }
  })
}, { prefix: 'USER' })
export const UserAction = { onInputChange }

export default handleActions({ [combineActions(onInputChange, updateUser)]: (state, { payload }) => ({ ...state, ...payload }) }, defaultState)
