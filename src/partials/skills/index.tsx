import { Badge } from '@/components/badge'
import { Section } from '@/components/section'
import styles from './styles.module.scss'
import { fetchStack } from '@/lib/notion'

type Tech = {
  title: string
  color: string
}

export async function Skills() {
  const stackData = await fetchStack()

  const stack: Tech[] = stackData.results.map((item: any) => ({
    title: item.properties.tech.title[0].plain_text,
    color: item.properties.color.rich_text[0].plain_text,
  }))

  return (
    <Section>
      <h2>Stack</h2>

      <div className={styles.flex}>
        {stack.map((tech) => (
          <Badge key={tech.title} text={tech.title} color={tech.color} />
        ))}
      </div>
    </Section>
  )
}
