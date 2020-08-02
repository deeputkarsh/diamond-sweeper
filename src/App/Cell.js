import React from 'react'
import styles from './styles.scss'

export default function Cell () {
  return (
    <div className={`${styles.cell} ${styles.unknown}`} />
  )
}
