import { Router } from 'express';

import {getWhishList, setNewWish, removeWish, clearWishtList } from '../controllers/wishListController.js';


const router = Router();

router.get('/wishlist', getWhishList);

router.post('/wishlist', setNewWish);

router.delete('/wishlist/:index', removeWish);

router.delete('/wishlist', clearWishtList);


export default router;

