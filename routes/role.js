import { Router } from 'express';

var router = Router();
import { getRoles, getRole, addRole, putRole, deleteRole} from '../controllers/role.js';

router.get('/', getRoles);

router.get('/:id', getRole)

router.post('/', addRole)

router.put('/:id', putRole);

router.patch('/:id', putRole);

router.delete('/:id', deleteRole);

export default router;