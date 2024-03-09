import { ExternalLink } from '@/components/external-link'
import { Section } from '@/components/section'
import { ExternalLinkIcon } from 'lucide-react'
import styles from './styles.module.scss'

const links = [
  { title: 'Linkedin', url: 'https://www.linkedin.com/in/clodoaldodantas/' },
  { title: 'E-mail', url: 'mailto:clodoaldodantas8@gmail.com' },
  { title: 'Github', url: 'https://github.com/ClodoaldoDantas' },
]

export function SocialLinks() {
  return (
    <Section>
      <h2>Links</h2>

      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.title}>
            <ExternalLink href={link.url}>
              <ExternalLinkIcon size={20} />
              {link.title}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  )
}
