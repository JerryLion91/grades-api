import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { db } from './models/index.js';
import { gradeRouter } from './routes/gradeRouter.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conected to Mongo');
  } catch (error) {
    console.log('Error' + error);
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'https://grades-app0.herokuapp.com/',
  })
);
app.use('/', gradeRouter);

app.get('/', (req, res) => {
  console.log('API em execucao');
  res.send('API em execucao');
});

app.listen(process.env.PORT || 8081, () => {});
