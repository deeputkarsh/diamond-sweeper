import React from 'react'
import Cell from './Cell'
import styles from './styles.scss'
import { connect } from 'react-redux'
import { APP_STATUS } from '../constants'

function App ({ cellData, score, hint, status }) {
  const isGameOver = status === APP_STATUS.GAME_OVER
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.message}>{isGameOver ? 'Final' : 'Your'} Score: {score}</div>
        <div className={styles.gridContainer}>
          {cellData.map((row, ri) => row.map((cell, ci) => (
            <div key={`cell_${ri}_${ci}`} className={styles.gridItem}>
              <Cell
                {...cell}
                hint={hint}
                col={ci}
                row={ri}
                isClickable={!isGameOver}
              />
            </div>
          )))}
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = ({ appState }) => ({ ...appState })

export default connect(mapStateToProps)(App)
