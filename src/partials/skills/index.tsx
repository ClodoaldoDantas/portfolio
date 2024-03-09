import { Badge } from '@/components/badge'
import { Section } from '@/components/section'
import styles from './styles.module.scss'

const items = [
  { title: 'HTML', color: '#f97316' },
  { title: 'CSS', color: '#3b82f6' },
  { title: 'Javascript', color: '#eab308' },
  { title: 'React', color: '#1d4ed8' },
  { title: 'Next JS', color: '#030712' },
  { title: 'Vue', color: '#65a30d' },
]

export function Skills() {
  return (
    <Section>
      <h2>Skills</h2>

      <div className={styles.flex}>
        {items.map((item) => (
          <Badge key={item.title} text={item.title} color={item.color} />
        ))}
      </div>
    </Section>
  )
}
