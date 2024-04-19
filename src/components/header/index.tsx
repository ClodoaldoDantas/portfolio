import { HandMetal } from 'lucide-react'
import styles from './styles.module.scss'

type User = {
  name: string
  bio: string
  company: string
  location: string
}

async function fetchUser(): Promise<User> {
  const response = await fetch('https://api.github.com/users/clodoaldodantas')
  const data = await response.json()

  return data
}

export async function Header() {
  const user = await fetchUser()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HandMetal className={styles.icon} size={48} />

        <h1 className={styles.title}>{user.name}</h1>
        <p className={styles.text}>{user.bio}</p>
        <p className={styles.text}>Morando em {user.location} 🏖️</p>
        <p className={styles.text}>Trabalhando em {user.company} 💼</p>
      </div>
    </header>
  )
}
