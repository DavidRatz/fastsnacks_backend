import { Router } from 'express';

var router = Router();
import { getProducts, getProduct, addProduct, putProduct, deleteProduct} from '../controllers/product.js';

router.get('/', getProducts);

router.get('/:id', getProduct)

router.post('/', addProduct)

router.put('/:id', putProduct);

router.patch('/:id', putProduct);

router.delete('/:id', deleteProduct);

export default router;