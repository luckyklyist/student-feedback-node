import logger from 'pino';
import dayjs from 'dayjs';
const log = logger({
    target: 'pino-pretty',
    options: { colorize: true },
    base: {
        pid: false
    },
    timestamp: () => `,${dayjs().format()}`
})

export default log;