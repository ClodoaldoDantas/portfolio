import { ExternalLink } from '@/components/external-link'
import { Section } from '@/components/section'
import { ExternalLinkIcon } from 'lucide-react'
import { fetchLinks } from '@/lib/notion'
import styles from './styles.module.scss'

type Link = {
  title: string
  url: string
}

export async function Links() {
  const response = await fetchLinks()

  const links: Link[] = response.results.map((item: any) => ({
    title: item.properties.label.title[0].plain_text,
    url: item.properties.url.rich_text[0].plain_text,
  }))

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
