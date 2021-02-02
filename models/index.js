import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db = {};
db.mongoose = mongoose;

db.url = process.env.MONGODB;

const gradeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

db.gradeModel = mongoose.model('grades', gradeSchema);

export { db };
