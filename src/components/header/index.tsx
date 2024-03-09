import { HandMetal } from 'lucide-react'
import { ExternalLink } from '../external-link'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HandMetal className={styles.icon} size={48} />

        <h1 className={styles.title}>Clodoaldo Dantas</h1>
        <p className={styles.text}>Desenvolvedor Front-end Pleno 💻</p>
        <p className={styles.text}>Morando em Fortaleza-CE 🏖️</p>
        <p className={styles.text}>
          Trabalhando em{' '}
          <ExternalLink href="https://www.tqi.com.br/">TQI</ExternalLink> 💼
        </p>
      </div>
    </header>
  )
}
