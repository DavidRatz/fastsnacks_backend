import { Router } from 'express';

var router = Router();
import { getOrderProducts, getOrderProduct, addOrderProduct, putOrderProduct, deleteOrderProduct} from '../controllers/orderProduct.js';

router.get('/', getOrderProducts);

router.get('/:id', getOrderProduct)

router.post('/', addOrderProduct)

router.put('/:id', putOrderProduct);

router.patch('/:id', putOrderProduct);

router.delete('/:id', deleteOrderProduct);

export default router;