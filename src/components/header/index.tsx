import { HandMetal } from 'lucide-react'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HandMetal className={styles.icon} size={48} />

        <h1 className={styles.title}>Clodoaldo Dantas</h1>
        <p className={styles.text}>Desenvolvedor Front-end 💻</p>
        <p className={styles.text}>Morando em Fortaleza-CE 🏖️</p>
      </div>
    </header>
  )
}
