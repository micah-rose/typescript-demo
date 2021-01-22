import { Router }  from 'express';
import {Todo} from '../models/todo';

const todos: Todo[] = []; //need to specify the type of data that will be in this array

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json( {todos: todos})
})

export default router;