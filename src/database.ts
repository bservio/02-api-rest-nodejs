import { knex as knexConifg } from 'knex'

export const knex = knexConifg({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})
