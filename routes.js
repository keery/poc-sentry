import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/error1', (req, res) => {
    throw new Error('Useless module not found')
});

router.get('/error2', (req, res) => {
    throw new Error('A beautiful useless error')
});

export default router;
