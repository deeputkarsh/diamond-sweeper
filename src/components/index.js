import React from 'react'
import Cell from './Cell'
import styles from './styles.scss'
import { connect } from 'react-redux'
import { APP_STATUS, GAME_STATUS_CLASS } from '../constants'

function App ({ cellData, score, hint, status }) {
  const isGameOver = status === APP_STATUS.GAME_OVER
  const gameStatusClass = styles[GAME_STATUS_CLASS[status]]
  return (
    <div className={styles.container}>
      <div className={`${styles.message} ${gameStatusClass}`}>{isGameOver ? 'Final' : 'Your'} Score: {score}</div>
      <main className={styles.gridContainer}>
        {cellData.map((row, ri) => row.map((cell, ci) => (
          <Cell
            key={`cell_${ri}_${ci}`}
            {...cell}
            hint={hint}
            col={ci}
            row={ri}
            isClickable={!isGameOver}
          />
        )))}
      </main>
    </div>
  )
}

const mapStateToProps = ({ appState }) => ({ ...appState })

export default connect(mapStateToProps)(App)
