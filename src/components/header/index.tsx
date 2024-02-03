import Image from 'next/image'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          width={150}
          height={150}
          src="/avatar.svg"
          className={styles.photo}
          alt=""
        />

        <h1 className={styles.title}>Clodoaldo Dantas</h1>
        <p className={styles.text}>Desenvolvedor Front-end 💻</p>
        <p className={styles.text}>Morando em Fortaleza-CE 🏖️</p>
      </div>
    </header>
  )
}
