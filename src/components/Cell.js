import React from 'react'
import styles from './styles.scss'
import { CELL_STATUS } from '../constants'
import { connect } from 'react-redux'
import { AppAction } from '../redux'

function Cell ({ status, diamond, hint, row, col, isClickable, onCellClick }) {
  const isClosed = status === CELL_STATUS.CLOSED
  const statusClass = isClosed ? styles.unknown : ''
  const diamondClass = diamond ? styles.diamond : ''
  const hintClass = hint.row === row && hint.col === col ? `${styles.arrow} ${styles[hint.direction]}` : ''
  const handleCellClick = (row, col) => isClickable && isClosed && onCellClick(row, col)
  return (
    <figure onClick={_ => handleCellClick(row, col)} className={`${styles.cell} ${statusClass} ${diamondClass} ${hintClass}`} />
  )
}

const mapDispatchToProps = { onCellClick: AppAction.onCellClick }

export default connect(null, mapDispatchToProps)(Cell)
