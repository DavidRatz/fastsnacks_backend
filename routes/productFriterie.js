import { Router } from 'express';

var router = Router();
import { getProductFriteries, getProductFriterie, addProductFriterie, putProductFriterie, deleteProductFriterie} from '../controllers/productFriterie.js';

router.get('/', getProductFriteries);

router.get('/:id', getProductFriterie)

router.post('/', addProductFriterie)

router.put('/:id', putProductFriterie);

router.patch('/:id', putProductFriterie);

router.delete('/:id', deleteProductFriterie);

export default router;