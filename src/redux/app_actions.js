import { createActions, handleActions, combineActions } from 'redux-actions'
import { CELL_STATUS, GRID_SIZE, APP_STATUS } from '../constants'
import { getStartApp, getNewStatus, getHint } from '../helpers'

const defaultState = {
  cellData: getStartApp(GRID_SIZE, GRID_SIZE),
  status: APP_STATUS.READY,
  hint: { row: -1, col: -1, direction: '' },
  score: GRID_SIZE * GRID_SIZE
}

const { onCellClick } = createActions({
  ON_CELL_CLICK: (row, col) => ({ row, col })
}, { prefix: 'APP' })

export const AppAction = { onCellClick }

export default handleActions({
  [combineActions(onCellClick)]: (state, { type, payload }) => {
    if (type === 'APP/ON_CELL_CLICK') {
      const { row, col } = payload
      const { cellData } = state
      const newData = JSON.parse(JSON.stringify(cellData))
      newData[row][col].status = CELL_STATUS.OPEN
      const { status, score } = getNewStatus(newData)
      const hint = getHint(newData, row, col)
      return { cellData: newData, status, score, hint }
    }
    return state
  }
}, defaultState)
