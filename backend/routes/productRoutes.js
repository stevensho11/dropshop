import express from "express";
const router = express.Router();
import {protect, admin} from '../middleware/authMiddleware.js'
import {getTopProducts, createProductReview, deleteProduct, updateProduct, getProductById, getProducts, createProduct} from '../controllers/productController.js';
import checkObjectId from "../middleware/checkObjectId.js";

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router.route('/:id').get(checkObjectId, getProductById).put(protect, admin, checkObjectId, updateProduct).delete(protect, admin, checkObjectId, deleteProduct);
router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);

export default router;