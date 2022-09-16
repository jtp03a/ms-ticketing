import mongoose from 'mongoose'

//An interface that describes the properties that are required to create a new ticket
interface OrderAttrs {
  title: string;
  price: number;
  userId: string;
}

//an interface that describes the properties that a Ticket Model has
interface OrderModel extends mongoose.Model<OrderDoc> {
  build(attrs: OrderAttrs): OrderDoc
}

//An interface that describes the properties that a Ticket Document has
interface OrderDoc extends mongoose.Document {
  title: string;
  price: number;
  userId: string;
}

const orderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
},
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
      }
    }
  }
)

orderSchema.statics.build = (attrs: OrderAttrs) => {
  return new Order(attrs)
}

const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema)

export { Order }