import { Client } from '@notionhq/client'

const client = new Client({
  auth: process.env.NOTION_SECRET,
})

export const fetchStack = () => {
  return client.databases.query({
    database_id: process.env.STACK_DATABASE_ID as string,
    sorts: [
      {
        property: 'created_at',
        direction: 'ascending',
      },
    ],
  })
}

export const fetchLinks = () => {
  return client.databases.query({
    database_id: process.env.LINKS_DATABASE_ID as string,
  })
}
