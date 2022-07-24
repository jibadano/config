const lodashGet = require('lodash/get')
const getConfig = require('next/config').default
const config = process.env.CONFIG
  ? JSON.parse(process.env.CONFIG)
  : getConfig().publicRuntimeConfig.config

const get = (field = '') =>
  field.startsWith('..')
    ? lodashGet(config, field.replace('..', ''))
    : lodashGet(config, `current.${field}`)

module.exports = { get }
