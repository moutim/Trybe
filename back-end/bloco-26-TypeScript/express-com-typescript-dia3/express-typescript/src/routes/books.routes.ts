import { Router } from 'express';

const router = Router();

import BooksController from '../controllers/books.controller';
const booksController = new BooksController();

router.get('/books', booksController.getAll);

export default router;