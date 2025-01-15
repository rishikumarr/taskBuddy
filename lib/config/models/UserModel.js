import mongoose from "mongoose";

const UserSchema  = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        profileImage: {
            type: String,
            default: '',
        },
        lastLoggedIn: {
            type: Date,
        },
        lastLoggedOut: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
)

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

export default UserModel;