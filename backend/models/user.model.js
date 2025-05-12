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
        

    }
},{timestamps:true});