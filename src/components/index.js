import React from 'react'
import Cell from './Cell'
import styles from './styles.scss'

export default function App () {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <div className='messages' />
          <table className={styles.diamondsweeperBoard}>
            <tbody>
              <tr>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><div className={`${styles.cell} ${styles.diamond}`} /></td>
                <td><Cell /></td>
              </tr>
              <tr>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><div className={styles.cell} /></td>
                <td><div className={styles.cell} /></td>
              </tr>
              <tr>
                <td><div className={styles.cell} /></td>
                <td><div className={styles.cell} /></td>
                <td><div className={styles.cell} /></td>
                <td><Cell /></td>
                <td><div className={`${styles.cell} ${styles.diamond}`} /></td>
                <td><div className={styles.cell} /></td>
                <td><Cell /></td>
                <td><Cell /></td>
              </tr>
              <tr>
                <td><Cell /></td>
                <td><div className={styles.cell} /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><div className={styles.cell} /></td>
                <td><div className={styles.cell} /></td>
                <td><div className={styles.cell} /></td>
                <td><Cell /></td>
              </tr>
              <tr>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><div className={`${styles.cell} ${styles.diamond}`} /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><div className={styles.cell} /></td>
                <td><div className={`${styles.cell} ${styles.arrow}`} /></td>
                <td><Cell /></td>
              </tr>
              <tr>
                <td><Cell /></td>
                <td><div className={styles.cell} /></td>
                <td><Cell /></td>
                <td><div className={styles.cell} /></td>
                <td><Cell /></td>
                <td><div className={styles.cell} /></td>
                <td><Cell /></td>
                <td><Cell /></td>
              </tr>
              <tr>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><div className={`${styles.cell} ${styles.diamond}`} /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><Cell /></td>
              </tr>
              <tr>
                <td><Cell /></td>
                <td><div className={styles.cell} /></td>
                <td><div className={styles.cell} /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><Cell /></td>
                <td><div className={styles.cell} /></td>
                <td><div className={styles.cell} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
