import express from 'express';
import connectDB from './utils/connect';
import config from 'config';
import log from './utils/logger';

const app = express();
const PORT = config.get<number>("port");

app.get('/', (_, res) => {
    res.send({ message: "server running" })
})

app.listen(PORT, () => {
    log.info(`App listening at the port ${PORT}`);
    connectDB();
})