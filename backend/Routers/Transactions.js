import express from 'express';
import { addTransactionController, deleteTransactionController, getAllTransactionController, updateTransactionController, deleteMultipleTransactionsController, getSingleTransactionController } from '../controllers/transactionController.js';



const router = express.Router();

router.route("/addTransaction").post(addTransactionController);

router.route("/getTransaction").post(getAllTransactionController);

router.route("/deleteTransaction/:id").post(deleteTransactionController);
router.route("/deleteTransactions").post(deleteMultipleTransactionsController); // New route for multi-deletion
router.route("/getTransaction/:id").get(getSingleTransactionController); // New route for fetching a single transaction

router.route('/updateTransaction/:id').put(updateTransactionController);

export default router;
