import React from 'react'
import styles from './styles.scss'
import { CELL_STATUS } from '../constants'
import { connect } from 'react-redux'
import { AppAction } from '../redux'

function Cell ({ status, diamond, row, col, handleCellClick }) {
  const statusClass = status === CELL_STATUS.CLOSED ? styles.unknown : ''
  const diamondClass = diamond ? styles.diamond : ''
  return (
    <div onClick={_ => handleCellClick(row, col)} className={`${styles.cell} ${statusClass} ${diamondClass}`} />
  )
}

const mapDispatchToProps = {
  handleCellClick: AppAction.onCellClick
}

export default connect(null, mapDispatchToProps)(Cell)
