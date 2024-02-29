import { Badge } from '@/components/badge'
import { ExternalLink } from '@/components/external-link'
import { Header } from '@/components/header'
import { ExternalLinkIcon } from 'lucide-react'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Sobre</h2>
          <p>
            Formado em Análise e Desenvolvimento de Sistemas, e sempre buscando
            programar de maneira simples, organizada e com boas práticas de
            código.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Skills</h2>

          <div className={styles.flex}>
            <Badge text="HTML" color="#f97316" />
            <Badge text="CSS" color="#3b82f6" />
            <Badge text="Javascript" color="#eab308" />
            <Badge text="React" color="#1d4ed8" />
            <Badge text="Next JS" color="#030712" />
            <Badge text="Vue" color="#65a30d" />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Links</h2>

          <ul className={styles.list}>
            <li>
              <ExternalLink href="https://www.linkedin.com/in/clodoaldodantas/">
                <ExternalLinkIcon size={20} />
                Linkedin
              </ExternalLink>
            </li>

            <li>
              <ExternalLink href="mailto:clodoaldodantas8@gmail.com">
                <ExternalLinkIcon size={20} />
                E-mail
              </ExternalLink>
            </li>

            <li>
              <ExternalLink href="https://github.com/ClodoaldoDantas">
                <ExternalLinkIcon size={20} />
                Github
              </ExternalLink>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
