import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(2500, () => console.log('Server is Running!'));
