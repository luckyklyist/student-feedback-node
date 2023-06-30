import logger from 'pino';

const log = logger({
    timestamp:true,
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    },
    pid:false,
  })

export default log;
