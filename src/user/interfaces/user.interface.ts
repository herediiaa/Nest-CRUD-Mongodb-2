export interface User extends Document {
  name: string;
  lastName: string;
  nacionality: string;
  email: string;
  age: number;
  date: Date;
}
