const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String,
}, { timestamps: true });

// UserSchema.pre('save', async function(next) {
//     const user = this;
//     if (!user.isModified('password')) return next();

//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(user.password, salt);
//         user.password = hashedPassword;
//         next();
//     } catch (error) {
//         return next(error);
//     }
// });

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
