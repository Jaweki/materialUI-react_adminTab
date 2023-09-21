import { Schema, models, model } from 'mongoose';

const transactionsSchema = new Schema({
    mpesaTransactionId: {
        type: String
    },

    date: {
        type: Date
    },

    amount: {
        type: Number
    },

    phoneNumber: {
        type: String
    }
});

const Transactions = models.Transactions || model('Transactions', transactionsSchema, 'completed_mpesa_transactions');

export default Transactions;