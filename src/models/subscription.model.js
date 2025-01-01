import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
   subscriber : {
    type : Schema.Types.ObjectId,// one who is subscriber
    ref: "User"
   },
   channel : {
    type: Schema.Types.ObjectId, // one whom 'subscriber' s subscribing
    ref: "User" 
   }

},{timestamps : true})


export const Subscription = mongoose.model("subscriptionSchema",subscriptionSchema)