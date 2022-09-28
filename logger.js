const { createWriteStream } = require('fs')
const pino = require('pino')
const pretty = require('pino-pretty')
const config = require('./config.js')

const pretty_opts = {
    colorize: true,
    translateTime: 'HH:MM:ss Z',
    ignore: 'pid,hostname'
}

const streams = [
    { level: 'trace', stream: pretty(pretty_opts), },
    { level: 'warn', stream: createWriteStream('logs/warn.log') }
]

const stream_opts = {
    levels: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    dedupe: process.env.NODE_ENV === 'production',
}

const logger = pino({
    level: config.logLevel,
}, pino.multistream(streams, stream_opts))

module.exports.logger = logger;
