import { ReactNode } from 'react'
import styles from './styles.module.scss'

export function Section({ children }: { children: ReactNode }) {
  return <section className={styles.section}>{children}</section>
}
