import { Schema } from 'mongoose';
/* Schema */
export const UserSchema = new Schema({
  name: String,
  lastName: String,
  nacionality: String,
  email: String,
  age: Number,
  date: { type: Date, default: Date.now() },
});
