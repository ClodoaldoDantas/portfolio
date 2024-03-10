import { Section } from '@/components/section'
import { Calendar } from 'lucide-react'
import styles from './styles.module.scss'

const experiences = [
  {
    company: 'TQI',
    date: 'Mar 2022 - o momento',
    role: 'Desenvolvedor Front-end Pleno',
  },
  {
    company: 'AjaxTI',
    date: 'Mar 2020 - Mar 2022',
    role: 'Desenvolvedor Front-end Júnior',
  },
  {
    company: 'Supermenu',
    date: 'Nov 2017 - Mar 2020',
    role: 'Desenvolvedor Web',
  },
]

export function Experiences() {
  return (
    <Section>
      <h2>Experiências</h2>

      <ul className={styles.experiences}>
        {experiences.map((experience) => (
          <li key={experience.company} className={styles.experience}>
            <strong>{experience.company}</strong>
            <span>{experience.role}</span>
            <time>
              <Calendar size={18} /> {experience.date}
            </time>
          </li>
        ))}
      </ul>
    </Section>
  )
}
