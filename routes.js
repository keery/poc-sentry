import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/test', (req, res) => {
    res.send('Page de test');
});

router.get('/error', (req, res) => {
    throw new Error('FUC**** ERROR');
});

export default router;
