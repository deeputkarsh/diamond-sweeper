import { createActions, handleActions, combineActions } from 'redux-actions'
import { CELL_STATUS } from '../constants'
import { store } from './configure_store'

const defaultState = {
  cellData: getStartApp(8, 8)
}

const { onCellClick } = createActions({
  ON_CELL_CLICK: (row, col) => {
    const oldData = store.getState().appState.cellData
    const newData = JSON.parse(JSON.stringify(oldData))
    newData[row][col].status = CELL_STATUS.OPEN
    return { cellData: newData }
  }
}, { prefix: 'USER' })

export const AppAction = { onCellClick }

export default handleActions({ [combineActions(onCellClick)]: (state, { payload }) => ({ ...state, ...payload }) }, defaultState)

function getStartApp (row, col) {
  const retData = []
  for (let i = 0; i < row; i++) {
    retData[i] = []
    const diamondAt = Math.floor(Math.random() * 8)
    for (let j = 0; j < col; j++) {
      retData[i][j] = { status: CELL_STATUS.CLOSED, diamond: diamondAt === j }
    }
  }
  return retData
}
