import styles from './styles.module.scss'

interface BadgeProps {
  text: string
  color?: string
}

export function Badge({ text, color = '#000' }: BadgeProps) {
  return (
    <div className={styles.badge}>
      <div style={{ background: color }} className={styles.circle} />
      <span className={styles.text}>{text}</span>
    </div>
  )
}
