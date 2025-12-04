import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Codex Club index API is running with TypeScript...');
});

export default app;
