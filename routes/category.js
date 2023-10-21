import { Router } from 'express';

var router = Router();
import { getCategorys, getCategory, addCategory, putCategory, deleteCategory} from '../controllers/category.js';

router.get('/', getCategorys);

router.get('/:id', getCategory)

router.post('/', addCategory)

router.put('/:id', putCategory);

router.patch('/:id', putCategory);

router.delete('/:id', deleteCategory);

export default router;

