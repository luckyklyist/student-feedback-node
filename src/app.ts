import express from 'express';
import connectDB from './utils/connect';
import config from 'config';
import log from './utils/logger';
import router from './routes/index.routes';
import bodyParser from 'body-parser';
import swaggerDocs from './utils/swagger';

const app = express();
const PORT = config.get<number>("port");

app.use(bodyParser());
app.use('/api/v1',router);

app.listen(PORT, () => {
    log.info(`App listening at the port ${PORT}`);
    connectDB();
    swaggerDocs(app);
})