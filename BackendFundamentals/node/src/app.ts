import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.status(200).send("Welcome to my app");
})

app.get('/app', (_, res) => {
  res.status(200).send("My first get endpoint");
})

export default app;