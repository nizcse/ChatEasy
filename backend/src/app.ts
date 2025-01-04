import express from 'express';
import dotenv from 'dotenv';
// import { connectToDatabase } from './services/database.service';
import bodyParser from 'body-parser';
dotenv.config();
const app = express();
app.use(bodyParser.json())
// connectToDatabase()
const port = process.env.PORT;
app.get('/', (req, res) => {
  res.send('namaste, World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});