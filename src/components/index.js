import React from 'react'
import Cell from './Cell'
import styles from './styles.scss'
import { useSelector } from 'react-redux'

export default function App () {
  const cellData = useSelector(state => state.appState.cellData)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <div className='messages' />
          <table className={styles.diamondsweeperBoard}>
            <tbody>
              {cellData.map((row, ri) => (
                <tr key={`row_${ri}`}>
                  {row.map((cell, ci) => (<td key={`col_${ci}`}><Cell {...cell} row={ri} col={ci} /></td>))}
                </tr>
              )
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
