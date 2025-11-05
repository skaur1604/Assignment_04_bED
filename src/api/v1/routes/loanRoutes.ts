import { Router } from 'express';
import { getLoans, createLoan, getLoanById, updateLoan, deleteLoan } from '../controllers/loanController';

const router = Router();

router.get('/', getLoans);
router.post('/', createLoan);
router.get('/:id', getLoanById);
router.put('/:id', updateLoan);
router.delete('/:id', deleteLoan);

export default router;
