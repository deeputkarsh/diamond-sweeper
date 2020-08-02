import React from 'react'
import Cell from './Cell'
import styles from './styles.scss'
import { connect } from 'react-redux'
import { APP_STATUS } from '../constants'

function App ({ cellData, score, status }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.message}>Your Score: {score}</div>
        <table className={styles.diamondsweeperBoard}>
          <tbody>
            {cellData.map((row, ri) => (
              <tr key={`row_${ri}`}>
                {row.map((cell, ci) => (
                  <td key={`col_${ci}`}>
                    <Cell
                      {...cell}
                      col={ci}
                      row={ri}
                      isClickable={status !== APP_STATUS.GAME_OVER}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}

const mapStateToProps = ({ appState }) => ({ ...appState })

export default connect(mapStateToProps)(App)
