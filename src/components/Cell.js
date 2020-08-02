import React from 'react'
import styles from './styles.scss'
import { CELL_STATUS } from '../constants'
import { connect } from 'react-redux'
import { AppAction } from '../redux'

function Cell ({ status, diamond, row, col, isClickable, onCellClick }) {
  const isClosed = status === CELL_STATUS.CLOSED
  const statusClass = isClosed ? styles.unknown : ''
  const diamondClass = diamond ? styles.diamond : ''
  const handleCellClick = (row, col) => isClickable && isClosed && onCellClick(row, col)
  return (
    <figure onClick={_ => handleCellClick(row, col)} className={`${styles.cell} ${statusClass} ${diamondClass}`} />
  )
}

const mapDispatchToProps = { onCellClick: AppAction.onCellClick }

export default connect(null, mapDispatchToProps)(Cell)
