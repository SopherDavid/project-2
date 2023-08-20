import express from 'express';
import usersRouter from './api/users/router.users.js';

const port = 8200;
const app = express();

app.use(express.json());

app.use('/api/users', usersRouter)


app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});