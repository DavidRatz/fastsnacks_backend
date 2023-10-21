import { Router } from 'express';

var router = Router();
import { getOrders, getOrder, addOrder, putOrder, deleteOrder} from '../controllers/order.js';

router.get('/', getOrders);

router.get('/:id', getOrder)

router.post('/', addOrder)

router.put('/:id', putOrder);

router.patch('/:id', putOrder);

router.delete('/:id', deleteOrder);

export default router;