import { Types } from 'mongoose';

export interface Product extends Document {
  name: string;
  description: string;
  price: number;
  userId: Types.ObjectId;
}
