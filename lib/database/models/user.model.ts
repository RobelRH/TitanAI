import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    planId: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 10 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const User = models?.User || model("User", userSchema);

export default User;