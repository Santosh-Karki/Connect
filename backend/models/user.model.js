import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String, 
        trim: true, 
        minLength: 3,
        maxLength: 50,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z\s]+$/.test(v);
            },
            message: props => `${props.value} is not a valid name!`
        },


        email:{
            type: String, 
            required: true,
            unique: true,
            trim: true,
        },

        password:{
            type: String, 
            required: true,
 
        },

        isVerified:{
            type: Boolean, 
            defaultt: false,

        },
        lastLogin:{
            type: Date,
            default: Date.now,
        },

        

    }
},{timestamps:true});


export const User = mongoose.model('User', userSchema);