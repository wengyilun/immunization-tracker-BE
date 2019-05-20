import knex from 'knex'
import knexConfig from '../../knexfile.js'

const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(knexConfig[dbEnv]);


