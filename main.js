import express from 'express';
import userService from './services/user.services.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', async (_req, res) => {
    const data = await userService.getAll();
    res.json(data);
});

app.post('/users', async (req, res) => {
    const user = req.body;
    const data = await userService.create(user);
    res.json(data);
});

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const data = await userService.getById(id);
    res.json(data);
});

app.delete('/users', (req, res) => {
    res.end('Hello from DELETE /users');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});