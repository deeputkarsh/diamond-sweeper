import { CELL_STATUS, APP_STATUS, GRID_SIZE } from '../constants'

export const getStartApp = (row, col) => {
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

export const getNewStatus = (cellData) => {
  const diamondsRemaining = cellData.reduce((curr, next) => curr + next.filter(item => item.diamond && item.status === CELL_STATUS.CLOSED).length, 0)
  const openedCell = cellData.reduce((curr, next) => curr + next.filter(item => item.status === CELL_STATUS.OPEN).length, 0)
  return {
    status: (diamondsRemaining > 0) ? APP_STATUS.PLAYING : APP_STATUS.GAME_OVER,
    score: (GRID_SIZE * GRID_SIZE) - openedCell
  }
}
