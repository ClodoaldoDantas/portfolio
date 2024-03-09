import { Header } from '@/components/header'
import { About } from '@/partials/about'
import { Skills } from '@/partials/skills'
import { SocialLinks } from '@/partials/social-links'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <About />
        <Skills />
        <SocialLinks />
      </main>
    </>
  )
}
