import { Schema, model } from "mongoose"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        userAvatar: {
            type: String,
            default:
                "https://exelord.com/ember-initials/images/default-d5f51047d8bd6327ec4a74361a7aae7f.jpg",
            required: false,
        },
    },
    { timestamps: true }
)

const User = model("users", userSchema)

export default User
