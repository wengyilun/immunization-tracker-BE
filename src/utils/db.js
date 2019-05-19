import knex from 'knex'
import knexConfig from '../../knexfile.js'
const db = knex(knexConfig.development)

const dao = {
}

export default db
